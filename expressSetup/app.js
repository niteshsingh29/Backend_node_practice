// const express = require("express");
// const app = express();
// const path = require("path");

// const staticPath = path.join(__dirname, "./public");
// app.use(express.static(staticPath)); //middleware built in module which helps to load the static files
// app.get("/", (req, res) => {
//   res.send("sending from backend express");
// });
// app.get("/Home", (req, res) => {
//   res.send("sending from Home express");
// });
// app.get("/About", (req, res) => {
//   res.send("sending from About express");
// });
// app.get("/Contact", (req, res) => {
//   res.send("sending from Contact express");
// });

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "nitesh",
//     },
//     {
//       id: 1,
//       name: "nitesh",
//     },
//   ]);
// });


// app.listen(8000, () => {
//   console.log("listening port at 8000");
// });

// console.log("listening");

// const express = require('express')
// const app = express()

// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//   let responseText = 'Hello World!<br>'
//   responseText += `<large>Requested at: ${req.requestTime}</large>`
//   res.send(responseText)
// })

// app.listen(3000, ()=> {
//   console.log("listening at 3000")
// })

// const express = require('express')
// const app = express()

// const myLogger = function (req, res , next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(3000)
