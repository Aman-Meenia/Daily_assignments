const fs = require("fs");

// Wtite File
const writeInFile = (filename, content) => {
  fs.writeFile(`${filename}.txt`, content, (err) => {
    console.log(
      "<-------------------WRITE FUNCTION CALLED---------------------->",
    );
    if (err) {
      console.log(`Error : ${err.message}`);
      return;
    }
    console.log("File Created Successfully");
  });
};

// Read File
const read_Content_Of_File = (filename) => {
  const content = fs.readFile(filename, "utf8", (err, response) => {
    console.log(
      "<-------------------READ FUNCTION CALLED---------------------->",
    );
    if (err) {
      console.log(`Error : ${err.message}`);

      return;
    }
    console.log(response);
  });
};

// Make directory

const make_directory = (dirName) => {
  fs.mkdir(dirName, (err) => {
    console.log(
      "<------------------MAKE DIRECTORY FUCNTION CALLED----------------------->",
    );

    if (err) {
      console.error("Error creating directory:", err.message);
      return;
    }
    console.log(`Directory created successfully with name ${dirName}`);
  });
};

//  List Files
const list_files_under_directory = (dirName) => {
  fs.readdir(dirName, (err, files) => {
    console.log(
      "<-----------------LIST DIRECTORY FUNTION CALLED------------------------>",
    );

    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    console.log(`Files under directory ${dirName}`);
    files.forEach((file) => {
      console.log(file);
    });
  });
};

//
exports.read_Content_Of_File = read_Content_Of_File;
exports.make_directory = make_directory;
exports.list_files_under_directory = list_files_under_directory;
exports.writeInFile = writeInFile;
