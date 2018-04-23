const mysql = require('mysql');

module.exports = function (request, response) {
    return mysql.createConnection({
        host:'roldanadb.cv3klttg3tz1.us-east-1.rds.amazonaws.com',
        user:'root',
        password:'luan120995',
        database:'roldanaInstance'
    });
}