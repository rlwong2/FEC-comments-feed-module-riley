const app = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

const server = app.listen(port, () => {console.log(`Now playing: ${port}`)});

let killServer = () => {
  server.close();
};

module.exports = server;