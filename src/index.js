const app = require('./app');

const PORT = process.env.PORT || 3000;
const host = process.env.host || 'localhost';

app.listen(PORT, () => {
  console.log(`the hostname ${host} on port ${PORT}`);
});

module.exports = app;
