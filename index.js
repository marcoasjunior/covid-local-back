const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const router = require('./routes/router')
const cors = require('cors')
const passport = require('passport')
const Strategy = require('./utils/passport')

app.use(cors())
app.use(express.json())

// Auth

passport.use(Strategy)

// Register routes

app.use('/api', router)

app.listen(port, () => {
    console.log('On')
})