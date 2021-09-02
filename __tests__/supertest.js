const request = require('supertest');

const server = 'http://localhost:3000';

// SUPERTEST ROUTE TESTING

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
          return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      });
    });
  });

  describe('/user/signup', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
          return request(server)
          .get('/user/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      });
    });
  });

  describe('/build/bundle.js', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
          return request(server)
          .get('/build/bundle.js')
          .expect('Content-Type', /application\/javascript/)
          .expect(200)
      });
    });
  });

  describe('/user/login', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
          return request(server)
          .get('/user/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      });
    });
  });
});
