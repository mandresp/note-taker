const express = require('express');
const path = require("path");
const fs = require("fs");
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
let notesArray = [];
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, function() {
  console.log("SERVER IS LISTENING: " + PORT);
});

module.exports = app;