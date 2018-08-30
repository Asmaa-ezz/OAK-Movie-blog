const express = require('express');
const router = express.Router();
const sign_in = require('./sign-in');
const sign_up = require('./sign-up');

const home = require('./home');

router.get('/', home.get);

// to sign in
router.get('/sign_in', sign_in.get);
router.post('/sign_in', sign_in.post);

// to sign up
router.get('/sign_up', sign_up.get);
router.post('/sign_up', sign_up.post);

module.exports = router;