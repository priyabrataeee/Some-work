const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/', (req, res, next) => {
    const assoc = {
        name: 'fetch-associateType',
        text: 'select distinct assoc_type_desc from phrdw_tb.Emp_Eom_Fact'
    }
    db.query(assoc, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows)
    })
})

module.exports = router;