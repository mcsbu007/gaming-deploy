// server.test.js
const request = require('supertest');
const app = require('./server');
const mongoose = require('mongoose');

// const connection = process.env.MONGODB_URI;


beforeAll(async () => {
    const connectionUri = "mongodb+srv://yunjiani832:RPehVJ1wqYUdc0PS@cluster0.yh3beol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(connectionUri, { /* options if any */ });
    console.log("Database Connected Successfully");
});

afterAll(async () => {
    // code to run after all tests, like closing database connection
    await mongoose.connection.close();
    console.log("Database Connection Closed");
  });

describe('GET /hello', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual({ message: 'Hello World!' });
  });
});


describe('GET /test', () => {
    it('responds with json', async () => {
      const res = await request(app)
        .get('/test')
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(res.body).toBeTruthy;
    });
  });

// const connection = "mongodb+srv://yunjiani832:RPehVJ1wqYUdc0PS@cluster0.yh3beol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";