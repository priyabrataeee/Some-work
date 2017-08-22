const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Dashboard Backend');
})

module.exports = router;
