const express = require('express')
const dotenv = require('dotenv').config()
const router = require('./routes/contact-routes')
const errorHandler = require('./middleware/errorhandler')
const app = express()


app.use(express.json())
app.use('/api/contacts', router)
app.use(errorHandler)


const PORT = process.env.PORT || 5007

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))