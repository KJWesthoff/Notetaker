
const path = require('path');
const router = require('express').Router();
const { notes } = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');




router.get('/notes', (req,res) =>{
    console.log('get')
    console.log(notes);
    res.json(notes);
});

router.post('/notes', (req,res) =>{
    const newNote = req.body
    newNote.id = uuidv4(); // add id to the package
    console.log('posted')
    console.log(newNote);
    res.json(newNote);
});




module.exports = router;

