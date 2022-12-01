const notes = require('express').Router();
const path = require('path')
const uuid = require("../helpers/uuid");
const { readAndAppend, readFromFile, writeToFile } = require("../helpers/fsUtils");

notes.get("/notes", function(err, res) {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

notes.post("/notes", function(req, res) {
    const database = path.join(__dirname, "../db/db.json");
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
    
        readAndAppend(newNote, database)

        const response = {
            status: 'success',
            body: newNote
        };

        res.json(response);
    } else {
        res.json("Error");
    }
})

notes.delete("/notes/:id", (req, res) => {
    const database = path.join(__dirname, "../db/db.json");
    const id = req.params.id;
    readFromFile(database)
        .then((notes) => {
            var parseNotes = JSON.parse(notes)
            const notesArray = parseNotes.filter((note) => note.id !== id);
            writeToFile(database, notesArray);
        })
        .then(() => {
            res.json(`Note has been deleted`)
        }).catch((err) => {
            res.status(500).json(err);
        })
});

module.exports = notes