const Apartamentos = require('../models/apartamentos');

module.exports = app => {

    app.get('/apartamentos', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        Apartamentos.lista(res);
    });

    app.get('/apartamentos/:id', (req,res) => {
        const id = parseInt(req.params.id);
        Apartamentos.buscaPorId(id, res);
    });

    app.post('/apartamentos', (req, res) => {
        const apartamento = req.body;
        Apartamentos.adiciona(apartamento, res);
    });

    app.patch('/apartamentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Apartamentos.altera(id, valores, res)
    })

    app.delete('/apartamentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Apartamentos.deleta(id, res)
    })
}
