import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

function getWeekend(){
    const Date = new Date();
    var day = "";
    if(day.getDay() === 5 || day.getDay() == 6){
        day = "weekend";
    }else{
        day = "weekday";
    }
    return day;
}
app.get("/", (req, res) => {
    app.send(`<h1>Hey! It's a ${getWeekend()}, it's time to work hard!`);
})

app.listen(3000);
