const express = require("express"); 

const server = express(); 

server.get("/", (req, res) => {
    res.send("Noah's API made from Scratch")
})

module.exports = server; 