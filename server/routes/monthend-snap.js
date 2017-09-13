const express = require('express')
const path = require('path')
const router = express.Router()
const db = require('../db/redshift/index')
const app = express()

var compData = {};

app.set('view engine', 'ejs');
app.engine('.json', require('ejs').renderFile);
app.set('views', path.join(__dirname, './src/app/components/monthend-snap'));

function getAssociateType(req, res, next) {
    const assoc = 'select distinct assoc_type_desc from phrdw_tb.Emp_Eom_Fact'
    db.query(assoc, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
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
        compData.flsa = data.rows;
        next();
    })
}

function getJobLevel(req, res, next) {
    const jobLvl = 'select distinct job_lvl_desc, job_lvl_cd from phrdw_tb.job_dim where job_lvl_desc is not null and job_lvl_cd is not null'
    db.query(jobLvl, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.jobLvl = data.rows;
        next();
    })
}

function getEmpStatus(req, res, next) {
    const empStatus = 'select distinct emp_status_desc from phrdw_tb.Emp_Eom_Fact'
    db.query(empStatus, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.empStatus = data.rows;
        next();
    })
}

function getCountry(req, res, next) {
    const countryNM = 'select distinct work_cntry_nm from phrdw_tb.loc_dim where work_cntry_nm is not null'
    db.query(countryNM, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.countryNM = data.rows;
        next();
    })
}

function getState(req, res, next) {
    const stateNM = 'select distinct work_st_cd from phrdw_tb.loc_dim where work_st_cd is not null'
    db.query(stateNM, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.stateNM = data.rows;
        next();
    })
}

function getCity(req, res, next) {
    const cityNM = 'select distinct work_city_nm from phrdw_tb.loc_dim where work_city_nm is not null'
    db.query(cityNM, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.cityNM = data.rows;
        next();
    })
}

function getBuilding(req, res, next) {
    const buildingAll = 'select distinct loc_cd, loc_nm from phrdw_tb.loc_dim where loc_nm is not null and loc_cd is not null'
    db.query(buildingAll, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.buildingAll = data.rows;
        next();
    })
}

function getOrgLvl1(req, res, next) {
    const orgLvl1 = 'select distinct finc_lvl_1_desc from phrdw_tb.dept_dim where finc_lvl_1_desc is not null'
    db.query(orgLvl1, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl1 = data.rows;
        next();
    })
}

function getOrgLvl2(req, res, next) {
    const orgLvl2 = 'select distinct finc_lvl_2_desc from phrdw_tb.dept_dim where finc_lvl_2_desc is not null'
    db.query(orgLvl2, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl2 = data.rows;
        next();
    })
}

function getOrgLvl3(req, res, next) {
    const orgLvl3 = 'select distinct finc_lvl_3_desc from phrdw_tb.dept_dim where finc_lvl_3_desc is not null'
    db.query(orgLvl3, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl3 = data.rows;
        next();
    })
}

function getOrgLvl4(req, res, next) {
    const orgLvl4 = 'select distinct finc_lvl_4_desc from phrdw_tb.dept_dim where finc_lvl_4_desc is not null'
    db.query(orgLvl4, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl4 = data.rows;
        next();
    })
}

function getOrgLvl5(req, res, next) {
    const orgLvl5 = 'select distinct finc_lvl_5_desc from phrdw_tb.dept_dim where finc_lvl_5_desc is not null'
    db.query(orgLvl5, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl5 = data.rows;
        next();
    })
}

function getOrgLvl6(req, res, next) {
    const orgLvl6 = 'select distinct finc_lvl_6_desc from phrdw_tb.dept_dim where finc_lvl_6_desc is not null'
    db.query(orgLvl6, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl6 = data.rows;
        next();
    })
}

function getOrgLvl7(req, res, next) {
    const orgLvl7 = 'select distinct finc_lvl_7_desc from phrdw_tb.dept_dim where finc_lvl_7_desc is not null'
    db.query(orgLvl7, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl7 = data.rows;
        next();
    })
}

function getOrgLvl8(req, res, next) {
    const orgLvl8 = 'select distinct finc_lvl_8_desc from phrdw_tb.dept_dim where finc_lvl_8_desc is not null'
    db.query(orgLvl8, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl8 = data.rows;
        next();
    })
}

function getOrgLvl9(req, res, next) {
    const orgLvl9 = 'select distinct finc_lvl_9_desc from phrdw_tb.dept_dim where finc_lvl_9_desc is not null'
    db.query(orgLvl9, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl9 = data.rows;
        next();
    })
}

function getOrgLvl10(req, res, next) {
    const orgLvl10 = 'select distinct finc_lvl_10_desc from phrdw_tb.dept_dim where finc_lvl_10_desc is not null'
    db.query(orgLvl10, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl10 = data.rows;
        next();
    })
}

function getOrgLvl11(req, res, next) {
    const orgLvl11 = 'select distinct finc_lvl_11_desc from phrdw_tb.dept_dim where finc_lvl_11_desc is not null'
    db.query(orgLvl11, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl11 = data.rows;
        next();
    })
}

function getOrgLvl12(req, res, next) {
    const orgLvl12 = 'select distinct finc_lvl_12_desc from phrdw_tb.dept_dim where finc_lvl_12_desc is not null'
    db.query(orgLvl12, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        compData.orgLvl12 = data.rows;
        next();
    })
}

function getAllData(req, res) {

    res.send({
        assoc: compData.assoc,
        flsa: compData.flsa,
        jobLvl: compData.jobLvl,
        empStatus: compData.empStatus,
        countryNM: compData.countryNM.sort(),
        stateNM: compData.stateNM,
        cityNM: compData.cityNM,
        buildingAll: compData.buildingAll,
        orgLvl1: compData.orgLvl1,
        orgLvl2: compData.orgLvl2,
        orgLvl3: compData.orgLvl3,
        orgLvl4: compData.orgLvl4,
        orgLvl5: compData.orgLvl5,
        orgLvl6: compData.orgLvl6,
        orgLvl7: compData.orgLvl7,
        orgLvl8: compData.orgLvl8,
        orgLvl9: compData.orgLvl9,
        orgLvl10: compData.orgLvl10,
        orgLvl11: compData.orgLvl11,
        orgLvl12: compData.orgLvl12
    });
}


router.get('/', getAssociateType, getFlsaStatus, getJobLevel, getEmpStatus, getCountry, getState, getCity, getBuilding, getOrgLvl1, getOrgLvl2, getOrgLvl3, getOrgLvl4, getOrgLvl5, getOrgLvl6, getOrgLvl7, getOrgLvl8, getOrgLvl9, getOrgLvl10, getOrgLvl11, getOrgLvl12, getAllData);

module.exports = router;