const express = require("express");
const app = express();
const path = require("path");

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

const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath)); // express.static is middleware built in module which helps to load the static files

app.listen(8000, () => {
  console.log("listening port at 8000");
});

console.log("listening")