const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to EasyGo' });
});

module.exports = router;
