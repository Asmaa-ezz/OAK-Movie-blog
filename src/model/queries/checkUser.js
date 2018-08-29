const db_connection = require('./../database/db_connection');

const checkUser = (data, callback) => {
    const sql = {
        text: "select * from users where username=$1;",
        values: [data.username]
    }
    db_connection.query(sql, (err, result) => {
        if (err)
            callback(err)
        else
            callback(null, result);
    })
}

module.exports=checkUser