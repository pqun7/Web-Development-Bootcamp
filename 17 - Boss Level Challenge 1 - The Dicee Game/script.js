function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");

    image1.setAttribute("src", `./src/dice/dice-six-faces-${randomNumber1}.png`);
    image2.setAttribute("src", `./src/dice/dice-six-faces-${randomNumber2}.png`);
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Number 1 is the Winner";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Number 2 is the Winner";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }

    image1.style.animation = "shake 0.5s";
    image2.style.animation = "shake 0.5s";

}
