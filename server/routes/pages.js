const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', function(req, res, next) {
    if (req.query['name'] !== undefined) {
        getByName(req, res, next)
    } else {
        getAll(req, res, next)
    }
})

function getAll(req, res, next) {
    const all = {
        name: 'fetch-pages',
        text: 'SELECT * FROM pages'
    }
    db.query(all, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows)
    })
}

function getByName(req, res, next) {
    const query = {
        name: 'user-search',
        text: 'SELECT * FROM companies WHERE company_name LIKE $1',
        values: [req.query.name]
    }
    db.query(query, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.send(data.rows)
    })
}

router.get('/:id', (req, res, next) => {
    const one = {
        name: 'fetch-company',
        text: 'SELECT * FROM companies WHERE id = $1',
        values: [req.params.id]
    }
    db.query(one, (err, data) => {
        if (err) {
            return next(err)
        }
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(data.rows[0])
    })
})

router.post('/', (req, res, next) => {
    const newCompany = {
        text: 'INSERT INTO companies (company_name, created_by) \
     VALUES ($1, $2) RETURNING id',
        values: [
            req.body.company_name,
            req.body.created_by
        ]
    }
    db.query(newCompany, (err, result, next) => {
        if (err) {
            res.statusCode = 500
            return res.json({
                errors: ['Failed to create company']
            })
        }
        // If success retrieve the inserted row and return it
        const one = {
            name: 'fetch-company',
            text: 'SELECT * FROM companies WHERE id = $1',
            values: [result.rows[0].id]
        }
        db.query(one, (err, data) => {
            if (err) {
                res.statusCode = 500
                return next(err)
            }
            res.statuscode = 201
            res.send(data.rows[0])
        })
    })
})

router.put('/:id', (req, res, next) => {
    const update = {
        name: 'update-company',
        text: 'UPDATE companies SET company_name = $1, updated_by = $2, \
    updated_at=now() WHERE id = $3',
        values: [
            req.body.company_name,
            req.body.updated_by,
            req.params.id
        ]
    }

    db.query(update, (err, data, next) => {
        if (err) {
            res.statusCode = 500
            return res.json({
                errors: ['Failed to update company']
            })
        }
        res.statusCode = 201;
        res.send('Update successful')
    })
})

router.delete('/:id', (req, res, next) => {
    const del = {
        name: 'delete-company',
        text: 'DELETE FROM companies WHERE id = $1',
        values: [req.params.id]
    }

    db.query(del, (err, data, next) => {
        if (err) {
            res.statusCode = 500;
            return res.json({
                errors: ['Failed to delete company']
            })
        }
        res.statusCode = 201;
        res.send(data.rows[0])
    })
})

module.exports = router;