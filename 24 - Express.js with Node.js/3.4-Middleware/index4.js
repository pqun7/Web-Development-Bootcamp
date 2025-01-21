import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
var bandName = "";

app.use(express.urlencoded({ extended: true }));

function gBandName(req, res, next){
  const street = req.body.street;
  const pet = req.body.pet;
  bandName = `${street}${pet}`;
  next();
}

app.use(gBandName)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  const street = req.body.street;
  const pet = req.body.pet;
  res.send(`<h1>Your Band name: </h1><h2>${bandName}</h2>`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
