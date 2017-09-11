const express = require('express')
const router = express.Router()
const db = require('../db/redshift/index')

var compData = [];

function getAssociateType(req, res, next) {
    const assoc = 'select distinct assoc_type_desc from phrdw_tb.Emp_Eom_Fact'
    db.query(assoc, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.associate = data.rows;
        compData.assoc = data.rows;
        next();
    })
}

function getFlsaStatus(req, res, next) {
    const flsa = 'select distinct flsa_stat_desc from phrdw_tb.job_dim'
    db.query(flsa, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.flsa = data.rows;
        compData.flsa = data.rows;
        next();
    })
}

function getAllData(req, res) {
    res.render('index', {
        assoc: compData.assoc,
        flsa: compData.flsa
    });
}

router.get('/', getAssociateType, getFlsaStatus, getAllData);

module.exports = router;