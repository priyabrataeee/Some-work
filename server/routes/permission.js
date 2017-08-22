const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', function(req, res, next) {
  if (req.query['user_id'] !== undefined) {
    if (req.query['item']==='company') {
      getUserCompanies(req, res, next)
    }
  } else if (req.query['company_id'] !== undefined) {
    getByCompany(req, res, next)
  } else {
    getAll(req, res, next)
  }
})

function getAll(req, res, next) {
  const all = {
    name: 'fetch-perms',
    text: 'SELECT * FROM permissions'
  }
  db.query(all, (err, data) => {
    if (err) {
      return next(err)
    }
    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(data.rows);
  })
}

function getUserCompanies(req, res, next) {
  const query = {
    name: 'user-company',
    text: 'SELECT u.id AS user_id, u.eid, u.first_name, u.last_name, \
     c.id AS company_id, c.company_name, p.id AS permission_id \
      FROM users u, companies c, permissions p \
       WHERE u.id = $1 AND u.id = p.user_id AND p.company_id = c.id',
    values: [req.query.user_id]
  }
  db.query(query, (err, data) => {
    if (err) {
      return next(err)
    }
    res.statuscode = 200;
    res.send(data.rows)
  })
}

function getByCompany(req, res, next) {
  const query = {
    name: 'by-company',
    text: 'SELECT * FROM permissions WHERE company_id = $1',
    values: [req.query.company_id]
  }
  db.query(query, (err, data) => {
    if (err) {
      return next(err)
    }
    res.statuscode = 200;
    res.send(data.rows)
  })
}

router.get('/:id', (req, res, next) => {
  const one = {
    name: 'fetch-perm',
    text: 'SELECT * FROM permissions WHERE id = $1',
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
  const newUser = {
    text: 'INSERT INTO permissions (user_id, database_id, company_id, \
    is_admin, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    values: [
      req.body.user_id,
      req.body.database_id,
      req.body.company_id,
      req.body.is_admin,
      req.body.created_by
    ]
  }
  db.query(newUser, (err, result, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to create permission']
      })
    }
    // If success retrieve the inserted row and return it
    const one = {
      name: 'fetch-perm',
      text: 'SELECT * FROM permissions WHERE id = $1',
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
    name: 'update-perm',
    text: 'UPDATE permissions SET user_id = $1, database_id = $2, \
          company_id = $3, is_admin = $4, updated_by = $5, updated_at=now() WHERE id = $6',
    values: [
      req.body.user_id,
      req.body.database_id,
      req.body.company_id,
      req.body.is_admin,
      req.body.updated_by,
      req.params.id
    ]
  }

  db.query(update, (err, data, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to update perm']
      })
    }
    res.statusCode = 201;
    res.send('Update successful')
  })
})

router.delete('/:id', (req, res, next) => {
  const del = {
    name: 'delete-perm',
    text: 'DELETE FROM permissions WHERE id = $1',
    values: [req.params.id]
  }

  db.query(del, (err, data, next) => {
    if (err) {
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to delete perm']
      })
    }
    res.statusCode = 201;
    res.send(data.rows[0])
  })
})

module.exports = router;