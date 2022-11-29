const router = require('express').Router();
const path = require("path");
const { router, response } = require('../server');
const { uuid } = require('uuidv4');

router.get("/notes", function(err, res) {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post("/notes", function(req, res) {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
      title,
      text,
      note_id: uuid()
    };
    
    readAndAppend(newNote, './db/db.json')
    }

    res.json(newNote);
})

router.delete("/notes/:id", function(req, res) {
    
})

module.export = router