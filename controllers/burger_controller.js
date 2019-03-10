var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var burgerInfo = {
      burgers: data
    };
    // console.log(burgerInfo);
    res.render("index", burgerInfo);
  });
});

router.post("/api/burger", function(req, res) {
 console.log(req.body);
  burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
 
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: true
  }, condition, function() {
    res.sendStatus(200);
  });
});

router.put("/cook/:id", function(req, res) {
 
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: false
  }, condition, function() {
    res.sendStatus(200);
  });
});

router.delete("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition);
  burgers.delete(condition, function() {
    res.sendStatus(200)
  });
});

module.exports = router;
