const router = require("express").Router();
let Users = require("../models/user.model");

router.route("/").get((req, res) => {
  Users.find()
    .then(response => res.json(response))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new Users({ username: username, password: password });

  newUser
    .save()
    .then(response => response.json(res))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
