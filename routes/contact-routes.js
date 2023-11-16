const express = require('express')
const router = express.Router();

router.route('/') 
    .get((req,res)=> {
        res.send('Get all Contacts')
    })
router.route('/') 
    .post((req,res)=> {
        res.send('Get all Contacts')
    })
router.route('/:id') 
    .get((req,res)=> {
        res.send('Get all Contacts')
    })
router.route('/:id') 
    .put((req,res)=> {
        res.send('Get all Contacts')
    })
router.route('/:id') 
    .delete((req,res)=> {
        res.send('Get all Contacts')
    })
module.exports = router



// .put(':id', (req, res) => {
//     res.send("Update Contact for " + req.params.id)
// })
// .delete(':id', (req, res) => {
//     res.send("Delete Contact for " + req.params.id)
// })