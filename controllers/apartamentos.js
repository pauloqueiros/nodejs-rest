const Apartamentos = require('../models/apartamentos');

module.exports = app => {
    app.get('/apartamentos', (req, res) => res.send('você está na rota de apartamentos e ta vacilando'));

    app.post('/apartamentos', (req, res) => {
        const apartamento = req.body;

        Apartamentos.adiciona(apartamento, res);
    })
}
