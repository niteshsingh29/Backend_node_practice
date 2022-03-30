const fs = require("fs");
const server = require("http");
const path = require("path");

console.log("welcome to backend");

const nitesh = server.createServer((req, res) => {
  if (req.url == "/") {
    res.end("sending from home");
  } else if (req.url == "/about") {
    res.end("sending from about");
  } else if (req.url == "/api") {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    fs.readFile(
      `path.join(__dirname, './userapi/json.json')`,
      "utf-8",
      (data) => {
        console.log(data);
      }
    );
    res.end("sending from  api");
  }
  res.writeHead(404, { "content-type": "text/html" }); // header status code
  res.end("<h1> sending from  backend</h1>");
});

nitesh.listen(8000, "127.0.0.1", () => {
  console.log("listening to the server");
});

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
