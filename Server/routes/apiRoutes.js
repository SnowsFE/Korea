const express = require("express");
const { getJobInfo } = require("../controllers/apiController");

const router = express.Router();

router.get("/job-info", getJobInfo);

module.exports = router;
