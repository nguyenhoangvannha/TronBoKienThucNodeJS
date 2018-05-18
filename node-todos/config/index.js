var config = require("./config.json");
module.exports = {
    getDBConfig:{
        host:config.host,
        username:config.username,
        password:config.password,
        database:config.database,
        table:config.table
    }
}