const request = require('supertest');
require('dotenv').config();

const server = `http://localhost:${process.env.PORT}`;

// SUPERTEST ROUTE TESTING

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('/dist/bundle.js', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/dist/bundle.js')
        .expect('Content-Type', /application\/javascript/)
        .expect(200));
    });
  });

  // Test the signup route
  describe('/user/signup', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .post('/user/signup')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    });
  });

  // Test the login route
  describe('/user/login', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .post('/user/login')
        .send({ email: 'gandalf@gmail.com', password: 'neverLate' })
        .expect('Content-Type', /application\/json/)
        .expect(200));
    });
  });
});
