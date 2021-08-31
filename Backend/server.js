const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const userController = require('./Controllers/userController.js')
const mongoURI = ('mongodb+srv://Daniel:codesmith@cluster0.mm1df.mongodb.net/Cluster0?retryWrites=true&w=majority')
mongoose.connect(mongoURI)
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MAIN GET REQUEST TO INDEX
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

//GET REQUEST FOR TEST PAGE
// app.get('/homepage', (req, res) => {
//   console.log('hello');
//   res.sendFile(path.join(__dirname, '../frontend/components/homepage.js'))
//   //res.render('../frontend/components/homepage.js')
// });





app.post('/post', userController.createUser, (req, res) => {
  console.log('jake paul wins')
  res.status(200)
  res.redirect('/Frontend/Component/homepage.js')
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



app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });