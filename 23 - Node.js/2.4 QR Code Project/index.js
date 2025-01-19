/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from "fs";

inquirer
    .prompt([
        {
        type: "input",
        name: 'url',
        message: "Type in your URL: ",
        }
    ])
    .then((ans) => {
        var qr_img = qr.image(ans.url, {type: 'png'});
        qr_img.pipe(fs.createWriteStream('my_qr.png'));
    })
    