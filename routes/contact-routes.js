const express = require('express')
const router = express.Router();

router.route('/', (req, res)=> {
    res.send("Contacts found all")
})

module.exports = router