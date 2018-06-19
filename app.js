const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const error = require("./views/error");

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/users"));
app.use("/error", require("./views/error"));

app.get('/', function (req, res) {
   res.redirect('/wiki/');
});

//error handling
app.use((err, req, res, next) => {
    //console.log(err)
    res.status(404).send(error('You have an error', err));
})

module.exports = app;
