const path = require ("path");

let pathObj = path.parse(__filename);
// let pathExtObj = path.extname(__filename);

// path.parse('/home/user/dir/file.txt');

console.log(pathObj.ext);

