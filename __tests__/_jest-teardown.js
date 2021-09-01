module.exports = async (globalConfig) => {
  console.log('CLOSING TEST SERVER');
  await testServer.close();
};
