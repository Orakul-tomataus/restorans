require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('./lib/token');

const app = express();
const PORT = process.env.APP_PORT || 5000;

process
  .on('SIGINT', gracefulExit)
  .on('SIGTERM', gracefulExit)
;

app.use(cors());
app.use(express.json({extensions: true}));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/order',require('./routes/orders'));

app.use('/', (req, res, next) => {
  const {authorization = ''} = req.headers;
  const [, token] = authorization.split(' ');

  jwt.verify(token, (err, user) => {
    if (user) {
      req.user = user;
    }
    next();
  });
});

//app.use('/api/orders', require('./routes/orders'));

start(PORT);
const teardown = [];

function start (port) {
  const connectDB = require('./db');
  const dbConnection = connectDB()
    .then((disconnect) => {
      teardown.push(disconnect);
    })
    .catch((connectionError) => {
      console.log('Connect to DB failure', connectionError);
      return Promise.reject(connectionError);
    });

  Promise.all([dbConnection])
    .catch((exception) => {
      console.error('Starting failure', exception.message);
      gracefulExit();
    })
    .then(() => {
      app.listen(port, () => console.log(`App has been started on port ${port}`))
    });
}

function gracefulExit () {
  const messages = teardown
    .map(async (fn) => {
      const message = await fn();
      return message;
    }, []);

  Promise.all(messages)
    .then((messages) => {
      messages.forEach(message => console.log(message));
      process.exit(0);
    });
}

