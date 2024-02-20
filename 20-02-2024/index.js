const {
  read_Content_Of_File,
  make_directory,
  list_files_under_directory,
  writeInFile,
} = require("./fileSystemModule.js");

//  To Read content of file
read_Content_Of_File("ddaman.txt");

//  To make new directory
make_directory("amanmeenia");

//  To list all files/folder under directory
list_files_under_directory("../20-02-2024");

// To write in file
writeInFile("aman", "Hello Aman Meenia");
