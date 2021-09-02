const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTERS
app.use('/user', userRouter);

// MAIN GET REQUEST TO INDEX
if (process.env.NODE_ENV !== 'development') {
  // Serve webpack build files from bundle
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // Serve main html page
  app.use('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));
}

// CATCH ALL ERROR HANDLER
app.use((req, res) => res.status(404).send('Not Found'));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
