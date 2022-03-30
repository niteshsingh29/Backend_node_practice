// const fs = require("fs");
// const http = require("http");
// const path = require("path");

// console.log("welcome to backend");

// const server = http.createServer()
// server.on("request", (req, res) => {
//   fs.readFile("user.txt", "utf-8" , (err, data) => {   // reading data from file
//     if (err) return console.error(err);
//     res.end(" hello world ");
//     console.log(data);
//   })
// })

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to the server");
// });

// let obj__1 = {
//     name: "nitesh singh",
//     age:21,
//     address: "surat",
//     country: "India",
//     role : {
//         post: "Backend Dev",
//         tech_stack: "node"

//     },
//     graduation : 'Btech'

// }

// console.log(obj__1)
// let jsondata = JSON.stringify(obj__1);
// fs.writeFile('json.json', jsondata, ()=> {

// })

// fs.readFile('json.json', 'utf8', (err, data) => {
//     console.log("readed", data)
// })
// fs.unlink('json1.json', () => {
//     console.log("deleted")
// })

// let objData = JSON.parse(jsonData);

// console.log("here is ur data", objData);

// fs.unlink('jsonToObj.js', () => {

// })

// fs.writeFile("objTojson.js", JSON.stringify(obj__1), ()=> {
//     console.log("created a js file and converted to json checkit out........")
//     console.log(obj__1)
// })

// fs.unlink("j.json", (err) => {
//     console.log("done")
// })


