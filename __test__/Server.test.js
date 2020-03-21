const axios = require('axios');
const server = require('../server/index.js');

const api = axios.create({ baseURL: "http://localhost:3000/" });


describe("Checks all the endpoints to the server", () => {

  beforeAll(() => {
    process.env.NODE_ENV = 'test';

  })

  afterAll(() => {
  });

  test("/artist endpoint returns object with artist name", async (done) => {
    const { data, status } = await api.get("/artist");
    expect(status).toBe(200);
    expect(data).toHaveProperty('name', 'the1975');
    done();
  });

  test("/song endpoint returns object with song title", async (done) => {
    const { data, status } = await api.get("/song");
    expect(status).toBe(200);
    expect(data).toHaveProperty('title', 'Frail State of Mind');
    done();
  });

  test("/artist endpoint returns object", async (done) => {
    const { data, status } = await api.get("/comments");
    expect(status).toBe(200);
    expect(data.length).toBeGreaterThanOrEqual(0);
    done();
  });

  test("/comments endpoint returns 200 status code", async (done) => {
    let testComment = {
      user_name: 'Jean Valjean',
      text: 'Bonjour, monsieur!'
    }
    const { data, status } = await api.post("/comments", testComment);
    expect(status).toBe(200);
    done();
  });

});
