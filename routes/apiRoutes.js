

const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {loadNotes, syncNotes, findById} = require('../lib/notes.js');


router.get('/notes', (req,res) =>{
    notes = loadNotes();
    //console.log('get');
    //console.log(notes);
    res.json(notes);
});


// api route by note id
router.get('/notes/:id', (req, res) => {
    notes = loadNotes();
    const result = findById(req.params.id, notes);
    if(result){
      res.json(result);
    } else {
      res.sendStatus(404);
    } 
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

router.delete('/notes:id', (req,res) => {
    
    //notes = loadNotes();
    id = req.params.id;
    console.log('del running' + id);
    //newNotes = notes.filter(note => note.id != id);
    
    //console.log(newNote);
    //res(JSON.stringify(newNotes));
    res.send('Got a DELETE request at /user')
});

module.exports = router;

