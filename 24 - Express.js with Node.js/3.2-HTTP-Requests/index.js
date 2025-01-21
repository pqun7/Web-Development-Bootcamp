import express from "express";
const host = express();

host.get("/", (req, res) => {
    res.send("<h1>Hello me</h1>");
});

host.get("/about", (req, res) => {
    res.send("<h1>About me</h1>");
});


host.listen(3000, ()=>{
    console.log("Server running on port 3000.");
}); 