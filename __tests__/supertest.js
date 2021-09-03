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

// Test the signup route
  describe('/user/signup', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .post('/user/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      });
    });
  });
 
  // Test the login route
  describe('/user/login', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .post('/user/login')
          .send({email: "gandalf@gmail.com", password: "neverLate"})
          .expect('Content-Type', /application\/json/)
          .expect(200)
      });
    });
  });

  
});
