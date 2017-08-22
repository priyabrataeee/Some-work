// Dependencies

const express = require('express')
const logger = require('morgan')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

// API routes

const api = require('./routes/api')
const user = require('./routes/user')
const database = require('./routes/database')
const company = require('./routes/company')
const permission = require('./routes/permission')
const page = require('./routes/pages')

const app = express();

app.use(logger('combined'))

// Parsers for POSD data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Point to Front end
app.use(express.static(path.join(__dirname, '../dist')))

// API Routes
app.use('/api/user', user)
app.use('/api/company', company)
app.use('/api/database', database)
app.use('/api/permission', permission)
app.use('/api/page', page)
app.use('/api', api)

// Redirect other routes to Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

// Port

const port = process.env.PORT || '3000'
app.set('port', port)

// Create Server
const server = http.createServer(app)

// Start Listening
server.listen(port, () => console.log(`API running on localhost:${port}`))