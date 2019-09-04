const express = require("express");

const router = express.Router();

// a router can have middleware that only applies to that router
router.use(express.json());

// this router handles urls that begin with /products
router.get("/", (req, res) => {
  res.send("GET to /products/");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`GET to /products/${id}`);
});

module.exports = router;
