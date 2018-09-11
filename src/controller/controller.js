var File = require("../model/model.js");
//creating a new file and storing in database
exports.createFile = (req, res) => {
  console.log("Creating a file");
  new File({
    fileName: req.body.fileName,
    filePath: req.body.filePath
  })
    .save()
    .then(file => {
      res.status(200).send(file);
    });
};
//reading all the files from the database
exports.readFile = (req, res) => {
  File.find().then(files => {
    res.status(200).send(files);
  });
};
//deleting a particular file having the specified id
exports.deleteFile = (req, res) => {
  File.findOneAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("File deleted");
  });
};
//updating the file having the specified id
exports.updateFile = (req, res) => {
  File.findOneAndUpdate(req.param.id, { $set: req.body }, (err, file) => {
    if (err) return next(err);
    res.send("File updated");
  });
};
