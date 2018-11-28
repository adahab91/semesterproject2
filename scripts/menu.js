//variables
var music = document.getElementById("myAudio");

//play GOT music
function playMusic(){
    music.play();
}

//pause GOT music
function pauseMusic(){
    music.pause();
}

//reload game
function reloadPage(){
    location.reload();
}

//exit game
function exitGame(){
    location.href = "index.html";
}