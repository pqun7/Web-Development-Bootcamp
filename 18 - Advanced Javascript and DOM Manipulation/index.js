var keywords = {
    "w": "./sounds/tom-1.mp3",
    "a": "./sounds/tom-2.mp3",
    "s": "./sounds/tom-3.mp3",
    "d": "./sounds/tom-4.mp3",
    "j": "./sounds/snare.mp3",
    "k": "./sounds/crash.mp3",
    "l": "./sounds/kick-bass.mp3"
};

function playSound(key){
    if (keywords[key]){
        var sound = new Audio(keywords[key]);
        sound.play();
    }
}

function makeAnimation(currentKey){
    var elm = document.querySelector(`.${currentKey}`);
    elm.classList.add("animation");
    setTimeout(function(){
        elm.classList.remove("animation");
    }, 100);
}

var drums = document.querySelectorAll(".drum");
drums.forEach(drum => {
    drum.addEventListener("click", (event) => {
        var btn = event.target.textContent.trim();
        playSound(btn);
        makeAnimation(btn);
    })
})

document.addEventListener("keydown", (event) => {
    playSound(event.key);
    makeAnimation(event.key);

});

