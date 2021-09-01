import 'regenerator-runtime/runtime';

module.exports = async () => {
  console.log('STARTING TEST SERVER');
  global.testServer = await require('../server/server');
};
