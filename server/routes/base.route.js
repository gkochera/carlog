const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('API works!');
});

router.use('/cars', require('./cars.route'))
router.use('/parts', require('./parts.route'))

module.exports = router;