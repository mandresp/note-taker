const express = require('express');
const path = require("path");
const fs = require("fs");
let notes = [];
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("api/notes", function(err, res) {
    try {
        notes = fs.readFileSync("./db/db.json")
        notes = JSON.parse(notesData);
    } catch (err) {
        console.log("\n error (in app.get.catch):");
        console.log(err);
    }
    res.json(notes);
})

app.post("api/notes", function(req, res) {
    try {

    } catch {

    }
})

app.delete("api/notes/:id", function(req, res) {
    try {

    } catch {

    }
})

app.get("/api/notes", function(req, res) {
  return res.sendFile(path.json(__dirname, "./db/db.json"));
});

// Start the server on the port
app.listen(PORT, function() {
  console.log("SERVER IS LISTENING: " + PORT);
});