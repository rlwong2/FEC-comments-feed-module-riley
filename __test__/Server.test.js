const axios = require('axios');
const app = require('../server/index.js');
const request = require('supertest');

// const api = axios.create({ baseURL: "http://localhost:3000/" });
let server;

describe("Checks all the endpoints to the server", () => {

  beforeAll(() => {
    process.env.NODE_ENV = 'test';
    // server = app.listen(3001, () => {
    //   global.agent = request.agent(server);
    //   done()
    // })
  })

  afterAll(async (done) => {
    // if (server) {
    //   await server.close(done)
    // }
  });

  test("/artist endpoint returns object with artist name", async (done) => {
    const res = await request(app).get("/artist");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'the1975');
    done();
  });

  test("/song endpoint returns object with song title", async (done) => {
    const res = await request(app).get("/song");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Frail State of Mind');
    done();
  });

  test("/artist endpoint returns object", async (done) => {
    const res = await request(app).get("/comments");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    done();
  });

  test("/comments endpoint returns 200 status code", async (done) => {
    let testComment = {
      user_name: 'Jean Valjean',
      text: 'Bonjour, monsieur!'
    }
    const res = await request(app)
      .post("/comments")
      .send(testComment);
    expect(res.statusCode).toBe(200);
    done();
  });

});
