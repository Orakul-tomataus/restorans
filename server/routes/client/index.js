const {Router} = require('express');
const router = Router();

module.exports = router;

router.post(
    '/getFoods',
    perform('getFoods'));
  

function perform (action) {
  const fn = require(`./${action}`);
  return async function (req, res) {

    try {
      const food = await fn(req);
      res.status(200).json({massege: food});
    } catch (e) {
      res.status(400).json({message: `${e.message}`})
    }
  }
}