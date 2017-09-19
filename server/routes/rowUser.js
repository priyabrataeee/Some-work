const express = require('express')
const router = express.Router()
const db = require('../db/redshift/index')

router.get('/', (req, res, next) => {
    if (req.query['name'] !== undefined) {
        getUsersByName(req, res, next);
    } else {
        getAllUsers(req, res, next);
    }
})

function getUsersByName(req, res, next) {
    const rowUser = {
        name: 'fetch-rowUser',
        text: "select distinct ec_nm, ec_id from phrdw_tb.dept_dim WHERE lower(ec_nm) like lower($1)",
        values: [req.query.name]
    }
    db.query(rowUser, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows)
    })
}

function getAllUsers(req, res, next) {
    const rowUsers = {
        name: 'fetch-rowUser',
        text: "select distinct ec_nm, ec_id from phrdw_tb.dept_dim"
    }
    db.query(rowUsers, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows)
    })
}

module.exports = router;