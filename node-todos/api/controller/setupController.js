var mysql = require('mysql');
var config = require('../../config/index');
var connection = mysql.createConnection({
    host: config.getDBConfig.host,
    user: config.getDBConfig.username,
    password: config.getDBConfig.password,
    database: config.getDBConfig.database
});

module.exports = function (app){
    app.get("/api/setupTodos", function (req, res) {
       //setup seed data
       var seedTodos = [
           {
                name: "Học NodeJS",
                isdone: false
            },
            {
                name: "Học AngularJS",
                isdone: false
            },
            {
                name: "Viết ứng dụng",
                isdone: false
            }
        ] ;
        connection.connect();
        seedTodos.forEach(element => {
            connection.query(`INSERT INTO ${config.getDBConfig.table} (NAME, ISDONE) VALUES('${element.name}', ${element.isdone})`
                , function (err, result, field) {
                if(err){
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        });
        connection.end();
    });
}