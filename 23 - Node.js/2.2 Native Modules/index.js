const fs = require("fs"); 
// fs.writeFile("messageMe.txt", "Enter The data here",(err)=>{
//     if(err) throw err;
//     console.log("file his been saved")
// });

fs.readFile("./messageMe.txt", 'utf8', (err, data) => {
    console.log(data);
})