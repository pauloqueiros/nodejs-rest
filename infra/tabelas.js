class Tabelas {
    init(conexao) {
        this.conexao = conexao;

        this.criarApartamentos();
    }

    criarApartamentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS apartamentos (IdApt int NOT NULL AUTO_INCREMENT, Apt int NOT NULL, Bloco varchar(1) NOT NULL, Vaga varchar(3) NOT NULL, PRIMARY KEY(IdApt))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela apartamentos criada com sucesso pnc');
            }
        })
    }
}

module.exports = new Tabelas;