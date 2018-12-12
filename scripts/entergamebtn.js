//create alert message if player tries to go to next pg without choosing two char

function displayAlert(){
    document.getElementById('chooseRight').style.display = "block";
    document.getElementById('chooseRight2').style.display = "block";
    setTimeout(function(){
        document.getElementById('chooseRight').style.display = "none";
        document.getElementById('chooseRight2').style.display = "none";
    }, 2000)
}

var twoPlayers = false;
var goToBoardGame = document.getElementById("goToBoardGame");
goToBoardGame.addEventListener(
    "click",function(){
        for(let i =0; i < localStorage.length; i++){
            if (localStorage.length === 2){
                twoPlayers = true;
                window.location.href = 'boardgame.html';
            } 
        }
        if(twoPlayers == false){
            displayAlert();
        }
    }
);
