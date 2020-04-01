const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const router = require('./routes/router')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Register routes

app.use('/api', router)

app.listen(port, () => {
    console.log('On')
})