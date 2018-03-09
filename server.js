var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("assets"));

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = require("./models");
require("./routes/htmlRoutes")(app);
require("./controllers/myFitness_controller.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});