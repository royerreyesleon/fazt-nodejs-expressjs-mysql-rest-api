const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'company',
});

mysqlConnection.connect(function (err){
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('Base de datos mysql conectada');
    }
});

module.exports=mysqlConnection;