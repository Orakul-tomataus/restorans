const mongoose = require('mongoose');

module.exports = connect;

async function connect () {
  const url = getURL(process.env);
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(url, options);

  return () => {
    return new Promise((resolve) => {
      mongoose.connection.close(() => {
        resolve('Close DB connection.')
      })
    })
  };
}

function getURL (config) {
  const {
    DB_LOCAL_URL,
    DB_RW_USER_NAME: DB_USER_NAME,
    DB_RW_USER_PASS: DB_USER_PASS,
    DB_HOST,
    DB_NAME,
    DB_OPTIONS,
  } = config;
  return (DB_LOCAL_URL)?DB_LOCAL_URL:`mongodb+srv://${DB_USER_NAME}:${DB_USER_PASS}@${DB_HOST}/${DB_NAME}?${DB_OPTIONS}`;
}