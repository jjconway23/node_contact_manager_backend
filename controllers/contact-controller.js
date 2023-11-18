const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res)=> {
    res.status(200).send('Get all Contacts')
})

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=> {
    // console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory !")
    }else {
        res.status(201).send('Create Contact')

    }
})

//@desc Get contact
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res)=> {
    res.status(200).send('Get Contact')
})

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res)=> {
    res.status(200).send('Update Contact')
})

//@desc Delete contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res)=> {
    res.status(200).send('Delete Contact')
})
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}
