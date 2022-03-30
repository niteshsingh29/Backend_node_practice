const express = require("express");
const app = express();

app.get("/", (req, res) => {    
    res.send("sending from backend express")
})
app.get("/Home", (req, res) => {    
    res.send("sending from Home express")
})
app.get("/About", (req, res) => {    
    res.send("sending from About express")
})
app.get("/Contact", (req, res) => {    
    res.send("sending from Contact express")
})

app.listen(8000, ()=> {
    console.log("listening port at 8000")
})