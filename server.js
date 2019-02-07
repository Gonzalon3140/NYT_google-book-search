const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001; //heroku uses this too deploy
const app = express("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NYT_GOOGLE-BOOK-SEARCH');

app.listen(PORT, () => console.log('i hear you'));