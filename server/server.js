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
if (import.meta.env.NODE_ENV !== 'development') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // Serve main html page
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
