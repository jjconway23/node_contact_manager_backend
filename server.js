const express = require('express')
const dotenv = require('dotenv').config()
const router = require('./routes/contact-routes')
const app = express()

app.use('/api/contacts', router)


const PORT = process.env.PORT || 5007

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))