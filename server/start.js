const app = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 3001 : 3005;

const server = app.listen(port, () => {console.log(`Running comments feed on ${port}`)});

let killServer = () => {
  server.close();
};

module.exports = server;