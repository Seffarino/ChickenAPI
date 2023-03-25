const express = require("express");
const router = express.Router();
const path = require("path");
/* If the user connect with browser he get the root idex */
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
