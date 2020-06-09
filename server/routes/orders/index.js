const {Router} = require('express');
const router = Router();

module.exports = router;

router.post(
    '/order',
    perform('addOrder'));
router.get(
    '/order',
    perform('getOrders'));
  

function perform (action) {
  const fn = require(`./${action}`);
  return async function (req, res) {
    try {
      const status = await fn(req);
      res.status(200).json({massege: status});
    } catch (e) {
      res.status(400).json({message: `${e.message}`})
    }
  }
}