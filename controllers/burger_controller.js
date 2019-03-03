var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/", function(req, res) {
  burgers.create([
    "burgerName", "isEaten"
  ], [
    req.body.burgerName, 0
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    isEaten: req.body.isEaten
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
