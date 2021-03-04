let fs = require("fs");


// This is how to read the file
// store the data that was read
let readMe = fs.readFileSync("./chirps.json", "utf-8"); // (file to read, character in coding(usually utf-8))
console.log(readMe);

