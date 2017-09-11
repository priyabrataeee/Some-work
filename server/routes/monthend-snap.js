const express = require('express')
const router = express.Router()
const db = require('../db/redshift/index')


router.get('/', getAssociateType, getFlsaStatus)

function getAssociateType(req, res, next) {
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
}

function getFlsaStatus(req, res, next) {
    const flsa = {
        name: 'fetch-flsaStatus',
        text: 'select distinct flsa_stat_desc from phrdw_tb.job_dim'
    }
    db.query(flsa, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows1)
    })
}

module.exports = router;