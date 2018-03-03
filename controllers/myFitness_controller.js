var db = require ("./models");

module.exports = function (app) {
  app.get("/" , function (req, res){
    db.myFitness.findAll().then(function (results){
      var myFitnessObject = {
        myFitnesss: results
      };
      res.render("index", myFitnessObject)
    });
  });
  app.post("/api/members", function(req, res){
    db.myFitness.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      zipCode:req.body.zipCode
    }).then(function(results){
      res.end();
    });
  });
}