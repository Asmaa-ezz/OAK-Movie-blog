const express = require('express');
const router = express.Router();
const sign_in = require('./sign-in');
const sign_up = require('./sign-up');

const home = require('./home');

router.get('/', home.get);

router.get('/sign_in',sign_in.get);
router.get('/sign_up',sign_up.get);

module.exports = router;