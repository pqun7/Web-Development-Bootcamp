import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    let day = today.getDay();
    
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 6 || day === 5){
        type = "a weekend";
        adv = "it's time to have fun";
    }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(3000);
