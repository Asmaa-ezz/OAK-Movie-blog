const tape = require('tape');
const addUser = require('./../../src/model/queries/addUser');
const build_db = require('./../../src/model/database/db_build');


// uesrname is already taken 
tape('try to add new User  already inserted username', (t) => {
    build_db();
    const data = { username: "ahmed", email: "am@asf.com", password: "123456789Q" };
    addUser(data, (err, result) => {
        t.equal(err.code, "23505", 'the error code should equla 23505');
        t.end();
    })
});
// email is already taken 
tape('try to add new User  already inserted email ', (t) => {
    build_db();
    const data = { username: "ahasdgasdgmed", email: "ahmed@ahmed.com", password: "123456789Q" };
    addUser(data, (err, result) => {
        t.equal(err.code, "23505", 'the error code should equla 23505');
        t.end();
    })
});

// email and username is new not taken  
tape('try to add new User  email and username is new not taken  ', (t) => {
    build_db();
    const data = { username: "javascript", email: "javascript@ahmed.com", password: "123456789Q" };
    addUser(data, (err, result) => {
        
        t.equal(result.rowCount,1, 'the error code should equla 23505');
        t.end();
    })
});