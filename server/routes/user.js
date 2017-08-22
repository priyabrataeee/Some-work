const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', function(req, res, next){
  if (req.query['eid'] !== undefined) {
    getByEid(req, res, next)
  } else {
    getAll(req, res, next)
  }
})

function getAll(req, res, next) {
  const all = {
    name: 'fetch-users',
    text: 'SELECT * FROM users'
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

function getByEid(req, res, next) {
  const query = {
    name: 'user-search',
    text: 'SELECT * FROM users WHERE eid LIKE $1',
    values: [req.query.eid]
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
    name: 'fetch-user',
    text: 'SELECT * FROM users WHERE id = $1',
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
    text: 'INSERT INTO users (eid, first_name, last_name, email, created_by) \
     VALUES ($1, $2, $3, $4, $5) RETURNING id',
    values: [
      req.body.eid.toLowerCase(),
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.created_by
    ]
  }
  db.query(newUser, (err, result, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to create user']
      })
    }
    // If success retrieve the inserted row and return it
    const one = {
      name: 'fetch-user',
      text: 'SELECT * FROM users WHERE id = $1',
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
    name: 'update-user',
    text: 'UPDATE users SET eid = $1, first_name = $2, \
          last_name = $3, email = $4, updated_by = $5, updated_at=now() WHERE id = $6',
    values: [
      req.body.eid,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.updated_by,
      req.params.id
    ]
  }

  db.query(update, (err, data, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to update user']
      })
    }
    res.statusCode = 201;
    res.send('Update successful')
  })
})

router.delete('/:id', (req, res, next) => {
  const del = {
    name: 'delete-user',
    text: 'DELETE FROM users WHERE id = $1',
    values: [req.params.id]
  }

  db.query(del, (err, data, next) => {
    if (err) {
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to delete user']
      })
    }
    res.statusCode = 201;
    res.send(data.rows[0])
  })
})

module.exports = router;