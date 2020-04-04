const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const router = Router();
const token = require('../../lib/token');

module.exports = router;

router.post(
  '/register',
  [
    check('email', 'Not valid email').isEmail(),
    check('password', 'Password too short').isLength({min: 6}),
  ]
  , perform('register'));

router.post(
  '/login',
  [
    check('email', 'Not valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ]
  , perform('login'));

function perform (action) {
  const fn = require(`./${action}`);
  return async function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Validation failure',
      });
    }

    try {
      const user = await fn(req.body);
      res.status(200).json({token: token.create(user)});
    } catch (e) {
      res.status(400).json({message: `${e.message}`})
    }
  }
}