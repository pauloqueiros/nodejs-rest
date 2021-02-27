const conexao = require('../infra/conexao')

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
}

module.exports = new Apartamentos;
