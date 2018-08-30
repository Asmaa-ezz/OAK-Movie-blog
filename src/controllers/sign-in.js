const path = require('path');
const checkUser = require('./../model/queries/checkUser');
const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {


    if (req.unlockCookie)
        res.redirect('/home');
    else
        res.render('sign-in', { stylefile: "sign_in", domfile: "sign-in", title: "Sign In" });
}

exports.post = (req, res) => {
    const data = req.body;
    console.log(req.unlockCookie);
    checkUser(data, (err, result) => {
        checkUsername(data, err, result, res, data.username);
    });

}


// Check Username is in database
const checkUsername = (data, err, result, res, username) => {
    if (err)
        res.send({ "err": "There Is Error Sorry About That", result: null });
    else {
        if (result.rowCount == 0)
            res.send({ "err": "Check Username Or Password ", result: null });
        else {
            checkPassword(data.password, result.rows[0].password, res, username);
        }
    }
}

// Check password equal hased password (in database)
const checkPassword = (password, hash, res, username) => {

    compare(password, hash, (err, result) => {
        if (err)
            res.send({ "err": "There Is Error Sorry About That", result: null });
        else {
            if (result) {
                makeCookie(username, res);
            } else
                res.send({ 'err': 'Check Username Or Password ', result: null });


        }
    });
}

// make encrypted cookie 
const makeCookie = (username, res) => {
    jwt.sign({ "username": username }, process.env.SECRET, (err, result) => {
        if (err)
            res.send({ "err": "There Is Error Sorry About That", result: null });
        else {
            res.cookie('jwt', result, { maxAge: 900000, httpOnly: true });
            res.send({ "err": null, result: '/home' });
        }
    });

}