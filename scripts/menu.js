var music = document.getElementById("myAudio");

function playMusic(){
    music.play();
}

function pauseMusic(){
    music.pause();
}

function reloadPage(){
    location.reload();
}

function exitGame(){
    location.href = "index.html";
}