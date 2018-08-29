const tape = require('tape');
const supertest = require('supertest');
const app = require('./../../src/index');
const buildDB = require('./../../src/model/database/db_build');

// Try user sign witn already taken username
tape('try sign up route  if enter already username ', (t) => {
    buildDB();
    supertest(app)
        .post('/sign_up')
        //Taken Username Should return object with err --> the user or email already taken 
        .send({ username: "ahmed", email: "am@asf.com", password: "123456789Q" })
        .expect(200)
        .expect('content-type',"application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual(body, { err: 'This User Or Email Is Already Taken  ', result: null }, 'The Response shoud be the user already taken ');
                t.end();
            }
        });

});


// Try user sign witn already taken email
tape('try sign up route  if enter already email ', (t) => {
    buildDB();
    supertest(app)
        .post('/sign_up')
        //Taken Username Should return object with err --> the user or email already taken 
        .send({ username: "jamal", email: "ahmed@ahmed.com", password: "123456789Q" })
        .expect(200)
        .expect('content-type',"application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual(body, { err: 'This User Or Email Is Already Taken  ', result: null }, 'The Response shoud be the user already taken ');
                t.end();
            }
        });

});

// Try user sign witn everything right
tape('try sign up route  if enter new username and email ', (t) => {
    buildDB();
    supertest(app)
        .post('/sign_up')
        //Taken Username Should return object with err --> the user or email already taken 
        .send({ username: "jamal", email: "hassouna@ahmed.com", password: "123456789Q" })
        .expect(200)
        .expect('content-type',"application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual(body, { err: null, result: '/sign_in' }, 'The Response shoud be the user already taken ');
                t.end();
            }
        });


});



