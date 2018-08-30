const jwt = require('jsonwebtoken');

const unlockCookie = (req, res, next) => {

    unlockToken(req.cookies.jwt, (err, result) => {
        if (err)
            req.unlockCookie = null;
        else
            req.unlockCookie = result;
    });
    next();
}

const unlockToken = (token, callback) => {
    jwt.verify(token, process.env.SECRET, callback);
}


module.exports = { unlockCookie }