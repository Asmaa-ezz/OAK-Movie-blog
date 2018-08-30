const path = require('path');
const bcrypt = require('bcryptjs');
const insertUser = require('./../model/queries/addUser');


//load  sign up page
exports.get = (req, res) => {
    res.render('sign-up', { stylefile: "sign_up", domfile: "sign-up", title: "Sign Up" });
}
// add user to database
exports.post = (req, res, next) => {
    const data = req.body;
    hash(data.password, (err, result) => {
        if (err)
            return res.send({ "err": "There is error in insert a new user", "result": null });
        data.password = result;
        addUser(data, res);
    });
}
// insert a new user to database
const addUser = (data, res) => {
    insertUser(data, (err, result) => {
        if (err) {
            if (err.code == 23505)
                res.send({ "err": `This User Or Email Is Already Taken  `, "result": null });
            else
                res.send({ "err": "There is error in insert a new user", "result": null });
        }
        else {
            res.send({ "err": null, "result": "/sign_in" });
        }
    });
}
// Hashing Password 
const hash = (str, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            callback(err);
        else
            bcrypt.hash(str, salt, (err, hash) => {
                if (err)
                    callback(err)
                else
                    callback(null, hash);
            });
    });
}

