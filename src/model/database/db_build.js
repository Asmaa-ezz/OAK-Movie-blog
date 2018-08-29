const db_connection = require('./db_connection');
const fs = require('fs');
const path = require('path');

const buildDB = () => {
    const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();
    db_connection.query(sql, (err, result) => {

    });

}
module.exports = buildDB;