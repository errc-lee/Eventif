const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userController = require('./controllers/userController.js');

const mongoURI = ('mongodb+srv://Daniel:codesmith@cluster0.mm1df.mongodb.net/Cluster0?retryWrites=true&w=majority');
const app = express();
const PORT = 3000;

mongoose.connect(mongoURI);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MAIN GET REQUEST TO INDEX
if (process.env.NODE_ENV !== 'development') {
  // Serve webpack build files from bundle
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // Serve main html page
  app.use('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));
}

// GET REQUEST FOR TEST PAGE
// app.get('/homepage', (req, res) => {
//   console.log('hello');
//   res.sendFile(path.join(__dirname, '../frontend/components/homepage.js'))
//   //res.render('../frontend/components/homepage.js')
// });

app.post('/post', userController.createUser, (req, res) => {
  console.log('jake paul wins');
  res.status(200);
  res.redirect('/Frontend/Component/homepage.js');
});

app.post('/login', userController.verifyUser, (req, res) => {
  return res.json('yes');
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

module.exports = app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
