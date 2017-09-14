const express = require('express')
const router = express.Router()
const db = require('../db/redshift/index')

router.get('/', (req, res, next) => {
    const rows = {
        name: 'fetch-rowUsers',
        text: 'select distinct ec_nm, ec_id from phrdw_tb.dept_dim WHERE ec_id like $1',
        values: [req.params.name]
    }
    db.query(rows, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows)
    })
})

module.exports = router;