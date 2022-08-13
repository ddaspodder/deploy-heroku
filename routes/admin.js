const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "admin", "admin.html"));
});

router.get("/create-user", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "admin", "create-user.html")
  );
});

router.post("/create-user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/create-user");
});

module.exports = router;
