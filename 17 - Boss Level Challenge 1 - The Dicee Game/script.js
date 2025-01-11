const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", `./src/dice/dice-six-faces-${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `./src/dice/dice-six-faces-${randomNumber2}.png`);
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Number 1 is the Winner";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Number 2 is the Winner";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
rollDice();
