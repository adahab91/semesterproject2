

var goToBoardGame = document.getElementById("goToBoardGame");
goToBoardGame.addEventListener(
    "click",function(){
        for(var i =0; i < localStorage.length; i++){
            if (localStorage.length === 2){
                
                window.location.href = 'boardgame.html';
            } else{
                alert("Please select two character");
            }
        }
    }
);
