var db = require ("../models");

module.exports = function (app) {
  app.get("/api/members" , function (req, res){
    db.Post.findAll().then(function (results){
      var myFitnessObject = results
      res.json(myFitnessObject)
    });
  });
  app.post("/api/members", function(req, res){
    console.log(req.body)
    db.Post.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      zipCode:req.body.zipCode
    }).then(function(results){
      res.status(200).end();
    });
  });
}