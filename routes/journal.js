const router = require("express").Router();
const Journal = require("../models/journal.model");

router.route("/").get((req, res) => {
  Journal.find()
    .then(response => res.json(response))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  Journal.findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newEntry = new Journal({
    title: title,
    description: description,
    date: date
  });

  newEntry
    .save()
    .then(response => res.json(response))
    .catch(err => res.status(400).json("Error " + err));
});

//update info by id
router.route("/update/:id").post((req, res) => {
  const id = req.params.id;

  Journal.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      description: req.body.description
    },
    (err, result) => {
      if (err) {
        res.send("Error somewhere : " + err);
      } else {
        res.send("Exercise has been updated");
      }
    }
  );
});

router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  Journal.findByIdAndDelete(id)
    .then(() => res.json("Journal has been deleted"))
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;
