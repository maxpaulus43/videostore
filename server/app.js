let express = require("express");

let config = require("./app.config"),
    morgan = require("morgan"),
    path = require("path");

let app = express();


app.use(morgan("dev"));
app.use(express.static(path.normalize(__dirname + "/../client")));


app.listen(config.port, () => {
    console.log("App listening on port " + config.port);
});

module.exports = app;
