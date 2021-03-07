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
                console.log('Tabela apartamentos criada com sucesso');
            }
        })
    }

    criarSindicos() {
        const sql = 'CREATE TABLE IF NOT EXISTS sindicos (IdSindico int NOT NULL AUTO_INCREMENT, NomeSindico varchar(55) NOT NULL, Email varchar(30) NOT NULL, Cpf varchar(20) NOT NULL,Telefone varchar(15) NOT NULL, PRIMARY KEY(IdSindico))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela sindicos criada com sucesso');
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
                console.log('Tabela comunicados criada com sucesso');
            }
        })
    }

    criarLocal() {
        const sql = `CREATE TABLE IF NOT EXISTS local (IdLocal int NOT NULL AUTO_INCREMENT, NomeLocal varchar(30) NOT NULL, Valor varchar(15) NOT NULL, PRIMARY KEY(IdLocal))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela local criada com sucesso');
            }
        })
    }

    criarMoradores() {
        const sql = `CREATE TABLE IF NOT EXISTS moradores (IdMorador int NOT NULL AUTO_INCREMENT, Nome varchar(55) NOT NULL, Email varchar(55) NOT NULL, Cpf varchar(30) NOT NULL,Telefone varchar(30) NOT NULL,IdApartamentoFkMorador int NOT NULL, PRIMARY KEY(IdMorador),
        FOREIGN KEY(IdApartamentoFkMorador) REFERENCES apartamentos(IdApt))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela moradores criada com sucesso');
            }
        })
    }

    criarReserva() {
        const sql = `CREATE TABLE IF NOT EXISTS reserva (IdReserva int NOT NULL AUTO_INCREMENT, IdMoradorFkReserva int NOT NULL, IdLocalFkReserva int NOT NULL, DataSolicitacao date NOT NULL, DataReserva date NOT NULL, PRIMARY KEY(IdReserva), FOREIGN KEY(IdMoradorFkReserva) REFERENCES moradores(IdMorador),
        FOREIGN KEY(IdLocalFkReserva) REFERENCES local(IdLocal))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela reserva criada com sucesso');
            }
        })
    }

    criarCorrespondencia() {
        const sql = `CREATE TABLE IF NOT EXISTS correspondencia (IdCorrespondencia int NOT NULL AUTO_INCREMENT,IdMoradorFkCorresp int NOT NULL,IdSindicoFkOcorrencia int NOT NULL,IdApartamentoFkCorresp int NOT NULL,Status varchar(10) NOT NULL,DataRecebimento date NOT NULL,
        Obs varchar(200) NOT NULL, PRIMARY KEY(IdCorrespondencia), FOREIGN KEY(IdMoradorFkCorresp) REFERENCES moradores(IdMorador), FOREIGN KEY(IdSindicoFkOcorrencia) REFERENCES sindicos(IdSindico),FOREIGN KEY(IdApartamentoFkCorresp) REFERENCES apartamentos(IdApt))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela correspondencia criada com sucesso');
            }
        })
    }

    criarOcorrencias() {
        const sql = `CREATE TABLE IF NOT EXISTS ocorrencias (IdOcorrencia int NOT NULL AUTO_INCREMENT, IdMoradorFkOcorrencia int NOT NULL, IdSindicoFkOcorrencia int NOT NULL, Tipo varchar(30) NOT NULL, DataOcorrencia date NOT NULL, Datacriacao date NOT NULL, Descricao text NOT NULL,
        Status varchar(20) NOT NULL, PRIMARY KEY(IdOcorrencia), FOREIGN KEY(IdMoradorFkOcorrencia) REFERENCES moradores(IdMorador), FOREIGN KEY(IdSindicoFkOcorrencia) REFERENCES sindicos(IdSindico))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }else{
                console.log('Tabela ocorrencias criada com sucesso');
            }
        })
    }

}

module.exports = new Tabelas;