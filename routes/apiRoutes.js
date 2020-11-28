

const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {loadNotes, syncNotes} = require('../lib/notes.js');


router.get('/notes', (req,res) =>{
    notes = loadNotes();
    //console.log('get');
    //console.log(notes);
    res.json(notes);
});

router.post('/notes', (req,res) =>{
    const newNote = req.body
    newNote.id = uuidv4(); // add id to the package
    //console.log('posted')
    //console.log(newNote);
    notes.push(newNote);
    syncNotes(notes)
    res.json(newNote);
});



module.exports = router;

