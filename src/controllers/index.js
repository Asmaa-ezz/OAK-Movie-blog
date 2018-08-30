const express = require('express');
const router = express.Router();
const sign_in = require('./sign-in');
const sign_up = require('./sign-up');
const home = require('./home');
const error = require('./error');

// to home page
router.get('/', home.get);

// to sign in
router.get('/sign_in', sign_in.get);
router.post('/sign_in', sign_in.post);

// to sign up
router.get('/sign_up', sign_up.get);
router.post('/sign_up', sign_up.post);


// to error 404
router.use(error.client);

// to error 500
router.use(error.server);

module.exports = router;
