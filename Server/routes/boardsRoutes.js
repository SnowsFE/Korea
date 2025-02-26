const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");

router.get("/data", boardsController.boardsData);
router.get("/top", boardsController.boardsTop);
router.get("/:id", boardsController.boardsDetail);

module.exports = router;
