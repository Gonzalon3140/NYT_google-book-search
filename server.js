const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware goes here
app.use(express.urlendcoded({
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add Routes Api and views
app.use(routes);

// Connect to Mongo DB
var CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost/booksearch";

mongoose.connect(CONNECTION_URI, {
    useMongoClient: true
}).then(() => {
    console.log('We are connected to MongoDB');
}).catch(err => console.log(err));

// Start API Server
app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});