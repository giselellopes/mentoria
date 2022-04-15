const express = require("express");
const bodyParser = require("body-parser");
const request = request("request");
const port = process.env.PORT || 3000;

const app = express();

// API middelwares

app.use(express.json()); //accept data json format

app.use(express.urlencoded()); //ddecode data send through html form


// API routes

app.get("/form",(req, res)=>{
    res.sendFile(__dirname + "index.html");

})

app.post("/formPost", (req,res)=>{
    console.log(req.body); //get the data in body
})


    app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "index.html");
});

app.listen(port,()=>{
    console.log("Server started on port 3000")
});

    