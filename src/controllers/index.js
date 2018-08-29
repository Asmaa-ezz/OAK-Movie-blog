const express = require('express');
const router = express.Router();
const sign_in = require('./sign-in');
const sign_up = require('./sign-up');

router.get('/', (req, res) => {
    res.send("Welcome in Home Page");
});

router.get('/sign_in',sign_in.get);
router.get('/sign_up',sign_up.get);

module.exports = router;