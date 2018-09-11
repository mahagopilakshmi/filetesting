var mongoose = require("mongoose");
// creating a schema for file system with filename and filepath
var fileSchema = mongoose.Schema({
  fileName: "String",
  filePath: "String"
});
module.exports = mongoose.model("File", fileSchema);
