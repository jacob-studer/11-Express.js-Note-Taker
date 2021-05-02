const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// const allnotes = require('../db/db.json');



    router.get('/api/notes', (req, res) => {
        fs.readFile(path.join('./db/db.json'), 'utf8', (err, notesData) => {
            if (err) throw err;
            console.log(notesData);
            res.json(JSON.parse(notesData))
        })
        });

    //2nd method using global allnotes variable

    // router.get('/api/notes', (req, res) => {
    //     res.send(allnotes);
    // });



    router.post('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join('./db/db.json')));
        const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFileSync(path.join('./db/db.json'), JSON.stringify(notes))
        console.log();
        });

    
    //2nd method using global allnotes variable
    
    // router.post('/api/notes', (req, res) => {
    //     const newNote = req.body;
    //     newNote.id = uuidv4();
    //     allnotes.push(newNote);
    //     fs.writeFileSync(path.join('./db/db.json'), JSON.stringify(allnotes))
    //     res.status(200);
    // });

    //for delete, loop through notes array and find the matching id to the note being deleted then make a router.delete



    module.exports = router;
