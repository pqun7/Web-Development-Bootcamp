import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(logger); 

app.get("/", (req, res) => {
  console.log("Home page")
  res.send("Hello");
});

app.get("/users", auth, (req, res) => {
  console.log(`User admin is ${req.admin}`)
  console.log("user page")
  res.send("Users page");
});


function logger(req, res, next){
  console.log(`Method: ${req.method} - URL: ${req.originalUrl}`);
  next();
}

function auth(req, res, next){
  if(req.query.admin === "true"){
    req.admin = true;
    next()
  }else{
    res.send("no auth")
  }
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
