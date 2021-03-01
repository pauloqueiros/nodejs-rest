const conexao = require('../infra/conexao');

class Apartamentos {
    adiciona(apartamento, res){
        const sql = 'INSERT INTO apartamentos SET ?'

        conexao.query(sql, apartamento, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
               res.status(201).json(result);
            }
        });
    }

    lista(res){
        const sql = 'SELECT * FROM apartamentos';
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM apartamentos WHERE IdApt=${id}`
        conexao.query(sql, (erro, resultado)=> {
            const apartamento = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(apartamento);
            }
        })
    }

    altera(id, valores, res) {   
        const sql = 'UPDATE apartamentos SET ? WHERE IdApt=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM apartamentos WHERE IdApt=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Apartamentos;
