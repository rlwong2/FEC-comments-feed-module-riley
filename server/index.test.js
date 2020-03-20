const axios = require('axios');
const app = require('./index.js');

const api = axios.create({ baseURL: "http://localhost:3000/" });

// beforeAll(() => {
//   app.start();
// })

// afterAll((done) => {
//   app.close(done)
// })

test("/artist endpoint returns object", async () => {
  const { data, status } = await api.get("/artist");
  expect(status).toBe(200);
  expect(data).toHaveProperty('name', 'the1975');
});

test("/song endpoint returns object", async () => {
  const { data, status } = await api.get("/song");
  expect(status).toBe(200);
  expect(data).toHaveProperty('title', 'Frail State of Mind');
});

test("/artist endpoint returns object", async () => {
  const { data, status } = await api.get("/comments");
  expect(status).toBe(200);
  expect(data.length).toBeGreaterThanOrEqual(0);
});