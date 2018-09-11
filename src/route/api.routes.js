const express = require("express");
const router = express.Router();
const fileController = require("../controller/controller");
//routes for http metthods (post,get,put and delete)
router.post("/create", function(req, res) {
  fileController.createFile;
});
router.get("/read", fileController.readFile);
router.delete("/:id/delete", function(req, res) {
  fileController.deleteFile;
});
router.put("/:id/update", function(req, res) {
  fileController.updateFile;
});
module.exports = router;
