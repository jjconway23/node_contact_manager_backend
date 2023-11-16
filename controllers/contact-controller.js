//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=> {
    res.status(200).send('Get all Contacts')
}

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req,res)=> {
    res.status(201).send('Create Contact')
}

//@desc Get contact
//@route Get /api/contacts/:id
//@access public
const getContact = (req,res)=> {
    res.status(200).send('Get Contact')
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res)=> {
    res.status(200).send('Update Contact')
}

//@desc Delete contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact = (req,res)=> {
    res.status(200).send('Delete Contact')
}
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}
