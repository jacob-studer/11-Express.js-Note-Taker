const notesData = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData));


    
    app.post('/api/db', (req, res) => {
        const newNote = req.body;
        console.log(newNote);
        

        });
};
