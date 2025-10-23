const cuentas = require('../data/cuentas');

// GET /cuentas
exports.obtenerCuentas = (req, res) => {
    console.log(cuentas);
    res.json({
        count: cuentas.length,
        data: cuentas
    });
};

// GET /cuenta/:id
exports.obtenerCuentaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const cuenta = cuentas.find(c => c.id === id);

  res.json({
    finded: !!cuenta,
    account: cuenta || null
  });
};

// GET /cuentas?queryParam=valor
exports.buscarCuentas = (req, res) => {
  const query = req.query.queryParam;
  if (!query) {
    return res.json({ finded: false, message: "Falta queryParam" });
  }

  const resultados = cuentas.filter(c =>
    c.id == query || c.nombre.toLowerCase().includes(query.toLowerCase()) || c.genero.toLowerCase() === query.toLowerCase()
  );

  if (resultados.length === 1) {
    res.json({ finded: true, account: resultados[0] });
  } else if (resultados.length > 1) {
    res.json({ finded: true, data: resultados });
  } else {
    res.json({ finded: false });
  }
};

// GET /cuentasBalance
exports.obtenerBalanceTotal = (req, res) => {
  const activas = cuentas.filter(c => c.isActive);
  const total = activas.reduce((sum, c) => sum + c.balance, 0);

  res.json({
    status: activas.length > 0,
    accountBalance: total
  });
};
