const express = require('express');

const router = express.Router();

module.exports = router;


//Get methid
router.get('getSomeData', (req, res) => {
    res.send('Got the data');
})
