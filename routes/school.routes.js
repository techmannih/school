const express = require("express");
const router = express.Router();
const schoolController = require("../controller/schoolController");

router.post("/addSchool", (req, res) => {
  console.log("Received POST request on /addSchool");
  schoolController.addSchool(req, res);
});

router.get("/listSchools", (req, res) => {
  console.log("Received GET request on /listSchools");
  schoolController.listSchools(req, res);
});

module.exports = router;
