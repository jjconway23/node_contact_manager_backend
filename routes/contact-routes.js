const express = require('express')
const router = express.Router();
const {getContacts, getContact, createContact, updateContact, deleteContact} = require('../controllers/contact-controller')
router.route('/') 
    .get(getContacts)

router.route('/') 
    .post(createContact)

router.route('/:id') 
    .get(getContact)

router.route('/:id') 
    .put(updateContact)

router.route('/:id') 
    .delete(deleteContact)
module.exports = router



// .put(':id', (req, res) => {
//     res.send("Update Contact for " + req.params.id)
// })
// .delete(':id', (req, res) => {
//     res.send("Delete Contact for " + req.params.id)
// })