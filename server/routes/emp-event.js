const express = require('express')
const path = require('path')
const router = express.Router()
const db = require('../db/redshift/index')
const app = express()

var compData = {};

app.set('view engine', 'ejs');
app.engine('.json', require('ejs').renderFile);
app.set('views', path.join(__dirname, './src/app/components/monthend-snap'));

function getDept(req, res, next) {
    const deptAll = 'select distinct dept_nm, dept_id from phrdw_tb.dept_dim where dept_nm is not null and dept_id is not null order by dept_nm'
    db.query(deptAll, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.deptAll = data.rows;
        next();
    })
}

function getReportTo1(req, res, next) {
    const reportTo1 = 'select distinct ec1_nm from phrdw_tb.Rpts_To_Dim where ec1_nm is not null order by ec1_nm'
    db.query(reportTo1, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.reportTo1 = data.rows;
        next();
    })
}

function getReportTo2(req, res, next) {
    const reportTo2 = 'select distinct ec2_nm from phrdw_tb.Rpts_To_Dim where ec2_nm is not null order by ec2_nm'
    db.query(reportTo2, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.reportTo2 = data.rows;
        next();
    })
}

function getReportTo3(req, res, next) {
    const reportTo3 = 'select distinct ec3_nm from phrdw_tb.Rpts_To_Dim where ec3_nm is not null order by ec3_nm'
    db.query(reportTo3, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.reportTo3 = data.rows;
        next();
    })
}

function getReportTo4(req, res, next) {
    const reportTo4 = 'select distinct ec4_nm from phrdw_tb.Rpts_To_Dim where ec4_nm is not null order by ec4_nm'
    db.query(reportTo4, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.reportTo4 = data.rows;
        next();
    })
}

function getAllData(req, res) {

    res.send({
        deptAll: compData.deptAll,
        reportTo1: compData.reportTo1,
        reportTo2: compData.reportTo2,
        reportTo3: compData.reportTo3,
        reportTo4: compData.reportTo4
    });
}

router.get('/', getDept, getReportTo1, getReportTo2, getReportTo3, getReportTo4, getAllData);

module.exports = router;