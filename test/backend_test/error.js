const test = require('tape');
const request = require('supertest');
const app = require('./../../src/index');

test('test route error 404 page ', (t) => {
  request(app)
    .get('/known')
    .expect(404)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.statusCode, 404, 'pass the test of error 40 page route page not found');
      t.end();
    });
});
//
// test('test route error 500 page ', (t) => {
//   request(app)
//     .get()
//     .expect(500)
//     .end((err, res) => {
//       if (err) t.error(err);
//       t.equal(res.statusCode, 500, 'pass the test of error 500 page route server error');
//       t.end();
//     });
// });
