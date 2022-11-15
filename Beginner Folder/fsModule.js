const fs = require("fs");

// fs.readFile('file.txt','utf8', (err,data)=>{
//     console.log(err,data)
// })
b = fs.writeFileSync("file2.txt", "This is a data2");
const a = fs.readFileSync("file2.txt");
console.log(a.toString());

console.log("Finished reading file");
