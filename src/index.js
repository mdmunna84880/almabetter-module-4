const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const swaggerDocs = require('./swagger/swaggerDocs')

// Port for running the application
const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Swagger
swaggerDocs(app);

// Connect to DATABASE
const DATABASE_URL = process.env.MONGO_URI;
mongoose.connect(DATABASE_URL);
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))