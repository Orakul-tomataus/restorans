const User = require('../../models/User');
const bcrypt = require('bcryptjs');

module.exports = loginUser;

async function loginUser (body) {
  const {email, password} = body;
  const user = await User.findOne({email});

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Password does not match');
  }

  return user;
}