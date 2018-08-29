const db_connection = require('./../database/db_connection');

const addUser = (data, callback) => {

    const sql = {
        text: "insert into users (username,email,password) values ($1,$2,$3);",
        values: [data['username'], data['email'], data['password']]
    }

    db_connection.query(sql, (err, result) => {
        if (err)
            callback(err);
        else
            callback(null, result);
    });
}
module.exports = addUser;