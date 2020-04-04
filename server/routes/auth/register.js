const User = require('../../models/User');
const bcrypt = require('bcryptjs');

module.exports = registerUser;

async function registerUser (body) {
  const {email, password} = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({email, password: hashedPassword});

  try {
    await user.save();
  } catch (error) {
    throw new Error('user already exists');
  } 
  return user;
}