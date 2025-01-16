// let timeoutID;
// const intervalID = setInterval(() => {
//     $('h1').css("opacity", 0.8);
//     timeoutID = setTimeout(() => {
//         $('h1').css("opacity", 1);
//     }, 300); 
// }, 500);

// $(".btn").click(() => {
//     clearTimeout(timeoutID); 
//     clearInterval(intervalID);
//     $('h1').css("opacity", 1);
// });

const GameConfig = (()=>{
    const buttons = {
        1: "red",
        2: "blue",
        3: "green",
        4: "yellow"
    };

    const sounds = {
        "blue": "./sounds/blue.mp3",
        "green": "./sounds/green.mp3",
        "red": "./sounds/red.mp3",
        "yellow": "./sounds/yellow.mp3",
    }

    return{
        getClassNumber: (color) => Object.keys(buttons).find(key => buttons[key] === color),
        getIdNumber: (numColor) => buttons[numColor],
        getSoundLoc: (soundName) => sounds[soundName]
        
    }
})();

class GameState{
    constructor(){
        this.isPlayerTurn = false;
        this.level = 1;
        this.speed = 450; // min speed 200ms
        this.savePlaces = [];
        this.count = 4;
        this.header = $(".level-title");
        this.userPressed = false;
    }

    addingEffect(button){
        button.addClass("effect-button");
        setTimeout(() => {
            button.removeClass("effect-button");
        }, 160); 
        let color = button.attr("class").split(" ")[1];
        var sound = new Audio(GameConfig.getSoundLoc(color));
        sound.play();
    }

    selectBtn(){
        let randomBtn = Math.floor(Math.random() * 4) + 1;
        let button = $(`.${GameConfig.getIdNumber(randomBtn)}`);
        this.addingEffect(button)
        return randomBtn
    }

    startGameCycle(){
        var n = this.count;
        this.header.text(`Level ${this.level}`)
        if(!this.isPlayerTurn && !this.userPressed){
            var intervalID = setInterval(() => {
                this.savePlaces.push(this.selectBtn());
                n--;
                this.userPressed = true;
                if(n <= 0){
                    clearInterval(intervalID);
                    this.isPlayerTurn = true;
                    this.userPressed = false;

                }
            }, this.speed);   
        }
    }

    handleButtonClick(color){
        if (!this.isPlayerTurn) return;
        if(this.isPlayerTurn){
            this.addingEffect($(`.${color}`));
            this.header.text(`Level ${this.level}`)
            let numOfBtn = GameConfig.getClassNumber(color);
            this.trackPlayerSelections(numOfBtn);
        }
    }

    trackPlayerSelections(numOfBtn){
        if(numOfBtn == this.savePlaces[0]){
            this.savePlaces.shift();
        }
        else{
            this.handleLoss();
        }

        if(this.savePlaces.length == 0 && this.isPlayerTurn){
          this.handleWin();
        }
    }

    handleWin(){
        this.level++;
        this.isPlayerTurn = false;
        if (this.speed > 200 && this.level % 2 == 0) {
            this.speed -= 20;
        }
        if(this.level % 5 == 0){
            this.count++;
        }
        setTimeout(() => this.startGameCycle(), 300);
    }

    handleLoss(){
        this.header.text("Game Over!")
        this.level = 1;
        this.isPlayerTurn = false;
        this.savePlaces = []
        var sound = new Audio("./sounds/wrong.mp3");
        sound.play()
    }
    

}

$(document).ready(() => {
    const gameState = new GameState();

    $(".btn").click(function () {
        gameState.startGameCycle();
    });


    $(".btn").click((event) =>{
        var color = event.target.className.split(" ")[1];
        gameState.handleButtonClick(color);

    })

})





