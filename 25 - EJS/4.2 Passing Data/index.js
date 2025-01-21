import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs"

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
let data = {
  header: "Enter your name below",
}

app.get("/", (req, res) => {
  res.render("index.ejs", data)
});

app.post("/submit", countLetters, (req, res) => {
  data.header = `There are ${res.locals.sumLetters} letters in your name.`
  res.render("index.ejs", data)
});




function countLetters(req, res, next){
  let sumLetters = req.body.fName.length + req.body.lName.length;
  res.locals.sumLetters = sumLetters;
  next();
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
