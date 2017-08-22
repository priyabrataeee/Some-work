const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  const all = {
    name: 'fetch-databases',
    text: 'SELECT * FROM databases'
  }
  db.query(all, (err, data) => {
    if (err) {
      return next(err)
    }
    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(data.rows)
  })
})

router.get('/:id', (req, res, next) => {
  const one = {
    name: 'fetch-database',
    text: 'SELECT * FROM databases WHERE id = $1',
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
  const newdb = {
    text: 'INSERT INTO databases (connection_name, connection_type, host, port, database_name, user_name, password, created_by) \
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
    values: [
      req.body.connection_name,
      req.body.connection_type,
      req.body.host,
      req.body.port,
      req.body.database_name,
      req.body.user_name,
      req.body.password,
      req.body.created_by
    ]
  }
  db.query(newdb, (err, result, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to create database']
      })
    }
    // If success retrieve the inserted row and return it
    const one = {
      name: 'fetch-database',
      text: 'SELECT * FROM databases WHERE id = $1',
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
    name: 'update-database',
    text: 'UPDATE databases SET connection_name = $1, connection_type = $2, \
          host = $3, port = $4, database_name = $5, user_name = $6, \
          password = $7, updated_by = $8, updated_at=now() WHERE id = $9',
    values: [
      req.body.connection_name,
      req.body.connection_type,
      req.body.host,
      req.body.port,
      req.body.database_name,
      req.body.user_name,
      req.body.password,
      req.body.updated_by,
      req.params.id
    ]
  }

  db.query(update, (err, data, next) => {
    if (err) {
      res.statusCode = 500
      return res.json({
        errors: ['Failed to update database']
      })
    }
    res.statusCode = 201;
    res.send('Update successful')
  })
})

router.delete('/:id', (req, res, next) => {
  const del = {
    name: 'delete-database',
    text: 'DELETE FROM databases WHERE id = $1',
    values: [req.params.id]
  }

  db.query(del, (err, data, next) => {
    if (err) {
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to delete database']
      })
    }
    res.statusCode = 201;
    res.send(data.rows[0])
  })
})

module.exports = router;