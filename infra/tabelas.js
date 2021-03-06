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

    criarSindicos() {
        const sql = 'CREATE TABLE IF NOT EXISTS sindicos (IdSindico int NOT NULL AUTO_INCREMENT, NomeSindico varchar(55) NOT NULL, Email varchar(30) NOT NULL, Cpf varchar(20) NOT NULL,Telefone varchar(15) NOT NULL, PRIMARY KEY(IdSindico))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela apartamentos criada com sucesso pnc');
            }
        })
    }

    criarComunicados() {
        const sql = `CREATE TABLE IF NOT EXISTS comunicados (IdComunicado int NOT NULL AUTO_INCREMENT, Titulo varchar(30) NOT NULL, DataComunicado date NOT NULL, Descricao text NOT NULL,IdSindicoFkComunicado int NOT NULL, PRIMARY KEY(IdComunicado),
        FOREIGN KEY(IdSindicoFkComunicado) REFERENCES sindicos(IdSindico))`

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