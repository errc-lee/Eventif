const request = require('supertest');

const server = 'http://localhost:3000';

// SUPERTEST ROUTE TESTING

describe('Route integration', () => {
  describe('/', () => {
        describe('GET', () =>{

          xit('responds with 200 status and text/html content type', () => request(server)
              .get('/')
              .expect('Content-Type', /text\/html/)
              .expect(200));
        });
      });

    })