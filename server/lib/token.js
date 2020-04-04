const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const options = {expiresIn: '1h'};

module.exports = {
  create,
  verify,
};

function create (user, cb) {
  if (!user.id) {
    throw new Error('Missing required property');
  }
  return jwt.sign({ userId: user.id }, jwtSecret, options, cb);
}

function verify (token, cb) {
  return jwt.verify(token, jwtSecret, cb);
}