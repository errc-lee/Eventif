const express = require('express');
const path = require('path');
require('dotenv').config();

const { PORT } = process.env || 3000;
const app = express();

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS
app.use('/user', userRouter);

// MAIN GET REQUEST TO INDEX
if (process.env.NODE_ENV !== 'development') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));

  app.use('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../src/index.html')));
}

// Unhandled Route Error Handler
app.use((req, res) => res.status(404).send('Not Found'));

// GLOBAL ERROR HANDLER - Internal Errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
