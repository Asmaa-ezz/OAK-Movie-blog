const tape = require('tape');
const supertest = require('supertest');
const app = require('./../../src/index');
const db_build = require('./../../src/model/database/db_build');

// Unknown Username
tape('try sign in with username wrong', (t) => {
    db_build();
    supertest(app)
        .post('/sign_in')
        .send({ username: "ramagas", password: 'jamal' })
        .expect(200)
        .expect('content-type', "application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual({ "err": "Check Username Or Password ", result: null }, body, ' the return value should contain err with value wrong usrename');
                t.end();
            }
        });
});
// Unknown Password
tape('try sign in with  password wrong', (t) => {
    db_build();
    supertest(app)
        .post('/sign_in')
        .send({ username: "ahmed", password: 'asdgasdgagsd' })
        .expect(200)
        .expect('content-type', "application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual({ "err": "Check Username Or Password ", result: null }, body, ' the return value should contain err with value wrong usrename');
                t.end();
            }
        });
});
// true username and  Password
tape('try sign in with username password', (t) => {
    db_build();
    supertest(app)
        .post('/sign_in')
        .send({ username: "ahmed", password: '123456789Q' })
        .expect(200)
        .expect('content-type', "application/json; charset=utf-8")
        .end((err, res) => {
            if (err)
                t.error(err);
            else {
                const body = res.body;
                t.deepEqual({ "err": null, result: '/home' }, body, ' the return value should contain err with value wrong usrename');
                t.end();
            }
        });
});
