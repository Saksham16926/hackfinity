import express from "express";
//import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello World!");
});

//app.post("/submit", (req,res) => {
//    console.log(req.body);
//    res.send(200);
//});

app.listen(port, () => {
console.log(`Server is running on port ${port}`)
});