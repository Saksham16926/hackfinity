import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var login = "";

app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next) {
  console.log(req.body);
  login = req.body["Username or Email"] + req.body["Password"];
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index3.html");
});

app.post("/submit", (req, res) => {
//   console.log(login);
  res.sendFile(__dirname + "/index4.html");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
