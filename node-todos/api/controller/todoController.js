var mysql = require('mysql');
var config = require('../../config/index');
var connection = mysql.createConnection({
    host: config.getDBConfig.host,
    user: config.getDBConfig.username,
    password: config.getDBConfig.password,
    database: config.getDBConfig.database
});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
connection.connect();

function getTodos(res) {
    connection.query(`SELECT * FROM ${config.getDBConfig.table}`, function (err, rows, field) {
        if(err){
            res.status(500).json(err);
        } else {
            res.send(rows);
        }
    });
}
function getTodo(res, id) {
    connection.query(`SELECT * FROM ${config.getDBConfig.table} WHERE ID=${id}`, function (err, row, field) {
        if(err){
            res.status(500).send(err);
        } else {
            res.send(row);
        }
    });
}
function insertTodo(res, todo) {
    connection.query(`INSERT INTO ${config.getDBConfig.table} (NAME, ISDONE) VALUES('${todo.NAME}', ${todo.ISDONE})`
                , function (err, result, field) {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.send(result);
                }
            });
}
function updateTodo(res, todo) {
    connection.query(`UPDATE ${config.getDBConfig.table} SET NAME=${todo.NAME}, ISDONE=${todo.ISDONE}) WHERE ID = ${todo.ID}`
                , function (err, result, field) {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.send(result);
                }
            });
}
function deleteTodo(res,id){
    connection.query(`DELETE FROM ${config.getDBConfig.table} WHERE ID = ${id}`
                , function (err, result, field) {
                if(err){
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
}
module.exports = function (app) {
    // get all todos
    app.get("/api/todos", function (req, res) {
        getTodos(res);
    });
    app.get("/api/todo/:id", function (req, res) {
        getTodo(res, req.params.id);
    });
    app.post("/api/todo", function (req, res) {
       var todo = {
            NAME: req.body.NAME,
            ISDONE: req.body.ISDONE
       } ;
       insertTodo(res, todo);
    });
    app.put("/api/todo",urlencodedParser, function (req,res) {
           todo = {
               id:req.body.ID,
               name:req.body.NAME,
               isdone:req.body.ISDONE
           };
           updateTodo(res, todo);
    });
    app.delete("/api/todo/:id", function (req, res) {
        if(!req.params.id){
            return res.status(500).send("ID required");
        } else {
            var id = req.params.id;
            deleteTodo(res, id);
        }
    });
}