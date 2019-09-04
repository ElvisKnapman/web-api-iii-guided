const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET request to /suppliers/");
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`GET to /suppliers/${name}`);
});

module.exports = router;
