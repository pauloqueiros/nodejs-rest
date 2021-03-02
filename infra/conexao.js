const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'mysql743.umbler.com',
    port: 3306,
    user: 'paulogq',
    password: '84220675p',
    database: 'softhouse'
});

module.exports = conexao;