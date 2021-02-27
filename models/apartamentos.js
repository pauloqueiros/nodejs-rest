const conexao = require('../infra/conexao')

class Apartamentos {
    adiciona(apartamento){
        const sql = 'INSERT INTO apartamentos SET ?'

        conexao.query(sql, apartamento, (erro, result) => {
            if(erro){
                console.log(erro);
            }else{
                console.log(result);
            }
        });
    }
}

module.exports = new Apartamentos;
