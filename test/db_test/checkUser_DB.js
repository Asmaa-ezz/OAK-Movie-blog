const tape = require('tape');
const db_build = require('./../../src/model/database/db_build');
const checkUser = require('./../../src/model/queries/checkUser');

// Search about not signed person
tape('Enter User Name Wrong', (t) => {
    db_build();
    checkUser({ "username": "jamal" }, (err, result) => {
        t.equal(result.rowCount, 0, 'The Row Count Should Equal Zero');
        t.end();
    });
});

// Search about signed person
tape('Enter User Name Wrong', (t) => {
    db_build();
    checkUser({ "username": "ahmed" }, (err, result) => {
        t.equal(result.rowCount, 1, 'The Row Count Should Equal Zero');
        t.equal(result.rows[0].username, "ahmed", 'the return object should have same username the user entered it');
        t.end();
    });
});