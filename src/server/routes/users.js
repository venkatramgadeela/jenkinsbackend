const express = require("express");

const router = express.Router();

router.post("/login", (req, res, next) => {
  const userlogin = {
    email: req.body.email,
    password: req.body.password
  };
  if (
    userlogin.email === "beingthanush@gmail.com" &&
    userlogin.password === "secret"
  ) {
    res.json({ message: true });
  } else {
    res.json({ message: false });
  }
});
module.exports = router;
