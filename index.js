require("dotenv").config(); 

const express = require("express"); 

const server = express(); 

server.get("/", (req, res) => {
    res.status(200).json({ message: "Noah's API made from Scratch"})
})

// module.exports = server; 

// const server = require("./server.js")

// for heroku we need a dynamic port 
// we can read the PORT value added by heroku to the environment 
const port = process.env.PORT || 8000; 
server.listen(port, () => console.log(`\n *** server is listening ${port} ***\n`))