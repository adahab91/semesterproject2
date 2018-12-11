function displayTile(){
    var tile ='<div id="' + this.trap + '" class="[ col-sm ][ tile ' + this.oddEven +  ' ]" data-tilenumber="' + this.number + '">' +
    '<p class="[ tile__number ]">' + this.number + '</p>' +
    '</div>';
    document.getElementById('showTile').innerHTML += tile;
}

//create object definition for tiles
function Tile(number, oddEven, trap){
    this.number = number;
    this.oddEven = oddEven;
    this.trap = trap;
    this.displayTile = displayTile;
}






function displayTokens(){
    var token = '<img class="[ player__token--'+this.name+' ]" id="'+this.id+'" data-name="'+ this.name +'" data-number="'+ this.number +'" src="images/'+ this.name +"Token" +'.png">';
    document.getElementById('playerToken').innerHTML += token;
}

//Create object definition for playertokens
function Player(name, number, id ){
    this.name = name;
    this.number = number;
    this.id = id;
    this.displayTokens = displayTokens;
};

//creating new tokens
var playerOne = new Player(localStorage.key(0), 0, "playerOne");
var playerTwo = new Player(localStorage.key(1), 0, "playerTwo");

playerOne.displayTokens();
playerTwo.displayTokens();
console.log(playerOne);
console.log(playerTwo);







function isEven(n) {
   return n % 2 == 0;
}

function slideInText(aString, badOrGood){
    var newSlideIn ='<h1 id="shoutOut" class="[ shout-out shout-out__text shout-out__text--'+ badOrGood +' ]">'+ aString +'</h1>'
    document.getElementById('slideInText').innerHTML += newSlideIn;
}

function displayCanvas(){
    var newCanvas ='<canvas class="[ dice__canvas ]" id="canvas" width="140" height="140">Your browser does not support Canvas</canvas>'
    document.getElementById('diceContainer').innerHTML += newCanvas;
}

function relocateWinner(){
    setTimeout(function(){
        location.href = "winner.html";
    }, 6000)
}






//ONCLICK FUNCTION
var countClicksOnButton = 0;
var playerOneId = document.getElementById("playerOne");
var playerTwoId = document.getElementById("playerTwo");

function rollDice(){
    const max = 6;
    var roll = Math.ceil(Math.random()* max);
    console.log("your rolled " + roll);
    document.getElementById("pushHere").style.display = "none";

    //crate active token function setup
    function activeToken(tokenNr, tokenNrId, tokenNrId2){
        tokenNr.number = tokenNr.number + roll;
        console.log(tokenNr.name + " new number = " + tokenNr.number);
        tokenNrId.dataset.number = tokenNr.number;
        console.log("datasetnr" + tokenNrId.dataset.number);

        if(roll === 6){
            countClicksOnButton += 0;
            console.log("counts click button = " + countClicksOnButton);
            //add message to trow again
            document.getElementById('rollAgain').style.display = "block";
            document.getElementById('rollAgain2').style.display = "block";

            if(tokenNrId.dataset.number >= 31){
                document.getElementById('rollAgain').style.display = "none";
                document.getElementById('rollAgain2').style.display = "none";
            }

        } else{
            //count number of clicks on button to decide wich turn it is
            countClicksOnButton += 1;
            console.log("counts click button = " + countClicksOnButton);
            document.getElementById('rollAgain').style.display = "none";
            document.getElementById('rollAgain2').style.display = "none";
        }


        //animate and style passive and active tokens
        tokenNrId.style.animation = "shake 0.5s";
        tokenNrId.style.animationIterationCount = "5";

        tokenNrId2.style.animation = "none";
        console.log(tokenNr.number);

        function moveTokenLandingOnTrap (animString, durString, nrString, nr){
            tokenNrId.style.animation = animString;
            tokenNrId.style.animationIterationCount = durString;

            tokenNrId.dataset.number = nrString;
            tokenNr.number = nr;
            console.log(tokenNr.name+" after trap = " + tokenNrId.dataset.number);
            
            
            document.getElementById('slideInText').innerHTML = "";
        }


        //add traps to different numbers
        var diceButton = document.getElementById("rollDice");
        switch (tokenNr.number) {
        case 1:
            diceButton.style.display = "none";
            function delayButton1(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton1();
        break;
        case 2:
            diceButton.style.display = "none";
            function delayButton2(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton2();
        break;
        case 3:
            diceButton.style.display = "none";
            function delayButton3(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton3();
        break;
        case 4: //HORSE TRAP TILE
            diceButton.style.display = "none";
            function delayMessage1(){
                setTimeout(function(){
                    slideInText("You found a horse! <br> Ride up to 17!", "good");
                }, 3000)
            }
            delayMessage1();
            function delayMoveTrapTile4(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("horse 1s", "3", "17", 17);
                }, 6000)
            }
            delayMoveTrapTile4();
            function delayButton4(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton4();
        break;
        case 5:
            diceButton.style.display = "none";
            function delayButton5(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton5();
        break;
        case 6:
            diceButton.style.display = "none";
            function delayButton6(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton6();
        break;
        case 7: //WOLFSWOOD
            diceButton.style.display = "none"; 
            function delayMessage2(){
                setTimeout(function(){
                    slideInText("You got lost in Wolfswood.. <br> You walked the wrong way back to 2..", "bad");
                }, 3000)
            }
            delayMessage2();
            function delayMoveTrapTile7(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("forest 0.5s", "6", "2", 2);
                }, 6000)
            }
            delayMoveTrapTile7();  
            function delayButton7(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton7();   
        break;
        case 8:
            diceButton.style.display = "none";
            function delayButton8(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton8();
        break;
        case 9:
            diceButton.style.display = "none";
            function delayButton9(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton9();
        break;
        case 10: //RAVEN TRAP TILE
            diceButton.style.display = "none";
            function delayMessage3(){
                setTimeout(function(){
                    slideInText("You got distracted by the Three-Eyed Raven..<br> Walk back to 3..", "bad");
                }, 3000)
            }
            delayMessage3();
            function delayMoveTrapTile10(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("raven 0.5s", "5", "3", 3);
                }, 6000)
            }
            delayMoveTrapTile10(); 
            function delayButton3(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton3();
        break;
        case 11:
            diceButton.style.display = "none";
            function delayButton11(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton11();
        break;
        case 12:
            diceButton.style.display = "none";
            function delayButton12(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton12();
        break;
        case 13: //RANDOM BACK TRAP TILE
            diceButton.style.display = "none";
            function delayMessage4(){
                setTimeout(function(){
                    slideInText("Walk back the amount on the dice..", "bad");
                }, 3000)
            }
            delayMessage4();
            function delayMoveTrapTile13(){
                setTimeout(function(){
                    tokenNrId.style.animation = "randomnr 0.5s";
                    tokenNrId.style.animationIterationCount = "5";

                    tokenNrId.dataset.number = tokenNr.number - roll;
                    tokenNr.number = tokenNr.number - roll;
                    console.log("newTokenNR after trap = " + tokenNrId.dataset.number);

                    diceButton.style.display = "block";
                    document.getElementById('slideInText').innerHTML = "";
                }, 6000)
            }
            delayMoveTrapTile13(); 
            function delayButton4(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton4();
        break;
        case 14:
            diceButton.style.display = "none";
            function delayButton14(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton14();
        break;
        case 15: //GHOST TRAP TILE
            diceButton.style.display = "none";
            function delayMessage5(){
                setTimeout(function(){
                    slideInText("Ghost helped you clear the way! <br> Jump up to 22!", "good");
                }, 3000)
            }
            delayMessage5();
            function delayMoveTrapTile15(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("wolf 2s", "2", "22", 22);
                }, 6000)
            }
            delayMoveTrapTile15(); 
            function delayButton15(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton15();
        break;
        case 16:
            diceButton.style.display = "none";
            function delayButton16(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton16();
        break;
        case 17:
            diceButton.style.display = "none";
            function delayButton17(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton17();
        break;
        case 18:
            diceButton.style.display = "none";
            function delayButton18(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton18();
        break;
        case 19:
            diceButton.style.display = "none";
            function delayButton19(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton19();
        break;
        case 20:
            diceButton.style.display = "none";
            function delayButton20(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton20();
        break;
        case 21:
            diceButton.style.display = "none";
            function delayButton21(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton21();
        break;
        case 22:
            diceButton.style.display = "none";
            function delayButton22(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton22();
        break;
        case 23://WIDOWS WAIL TRAP TILE
            diceButton.style.display = "none";
            function delayMessage6(){
                setTimeout(function(){
                    slideInText("WOW! You found the Widow's Wail!! <br> You fought your way up to 26!", "good");
                }, 3000)
            }
            delayMessage6();
            function delayMoveTrapTile23(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("sword 0.2s", "10", "26", 26);
                }, 6000)
            }
            delayMoveTrapTile23(); 
            function delayButton6(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton6();
            
        break;
        case 24:
            diceButton.style.display = "none";
            function delayButton24(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton24();
        break;
        case 25://ANGRY KNIGHTS TRAP TILE
            diceButton.style.display = "none";
            function delayMessage7(){
                setTimeout(function(){
                    slideInText("You ran into a bunch of angry knights! <br> Run back to 21!", "bad");
                }, 3000)
            }
            delayMessage7();
            function delayMoveTrapTile25(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("knight 0.2s", "13", "21", 21);
                }, 6000)
            }
            delayMoveTrapTile25(); 
            function delayButton7(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton7();
            
        break;
        case 26:
            diceButton.style.display = "none";
            function delayButton26(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton26();
        break;
        case 27:
            diceButton.style.display = "none";
            function delayButton27(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton27();
        break;
        case 28:
            diceButton.style.display = "none";
            function delayButton28(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 3000)
            }
            delayButton28();
        break;
        case 29://DRAGON GOT YOU TRAP TILE
            diceButton.style.display = "none";
            function delayMessage8(){
                setTimeout(function(){
                    slideInText("The dragon got you! <br> You was thrown down on 11!", "bad");
                }, 3000)
            }
            delayMessage8();
            function delayMoveTrapTile29(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("spin 0.5s", "5", "11", 11);
                }, 6000)
            }
            delayMoveTrapTile29(); 
            function delayButton8(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton8();
        break;
        case 30://DRAGON FIGHT TRAP TILE 
            diceButton.style.display = "none";
            function delayMessage9(){
                setTimeout(function(){
                    slideInText("A dragon fight! <br> Search coverage on 24!", "bad");
                }, 3000)
            }
            delayMessage9();
            function delayMoveTrapTile30(){
                setTimeout(function(){
                    moveTokenLandingOnTrap("fight 0.2s", "13", "24", 24);
                }, 6000)
            }
            delayMoveTrapTile30();
            function delayButton9(){
                setTimeout(function(){
                    diceButton.style.display = "block";
                }, 9000)
            }
            delayButton9();
            
        break;
        default: 
            
        } 

    }

    switch (roll) {
        case 1:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            //clear out previous dice
            ctx.clearRect(0,0,140,140);

            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(70, 70, 7, 0, Math.PI * 2, true);
            ctx.fill();
            
        break;
        case 2:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
            ctx.moveTo(95, 90);
            ctx.arc(90, 90, 7, 0, Math.PI * 2, true); 
            ctx.fill();          
        break;
        case 3:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(50, 50, 7, 0, Math.PI * 2, true);
            ctx.moveTo(75, 70);
            ctx.arc(70, 70, 7, 0, Math.PI * 2, true);
            ctx.moveTo(95, 90);
            ctx.arc(90, 90, 7, 0, Math.PI * 2, true);
            ctx.fill();
            
        break;
        case 4:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(50, 50, 7, 0, Math.PI * 2, true);  
            ctx.moveTo(95, 50);
            ctx.arc(90, 50, 7, 0, Math.PI * 2, true);  
            ctx.moveTo(55, 90);
            ctx.arc(50, 90, 7, 0, Math.PI * 2, true);  
            ctx.moveTo(95, 90);
            ctx.arc(90, 90, 7, 0, Math.PI * 2, true);  
            ctx.fill();
            
        break;
        case 5:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(50, 50, 7, 0, Math.PI * 2, true);  
            ctx.moveTo(95, 50);
            ctx.arc(90, 50, 7, 0, Math.PI * 2, true); 
            ctx.moveTo(75, 70);
            ctx.arc(70, 70, 7, 0, Math.PI * 2, true); 
            ctx.moveTo(55, 90);
            ctx.arc(50, 90, 7, 0, Math.PI * 2, true); 
            ctx.moveTo(95, 90);
            ctx.arc(90, 90, 7, 0, Math.PI * 2, true); 
            ctx.fill();

            
        break;
        case 6:
            displayCanvas();
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw "eyes" on the dice
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(50, 50, 7, 0, Math.PI * 2, true);  // 1
            ctx.moveTo(95, 50);
            ctx.arc(90, 50, 7, 0, Math.PI * 2, true);  // 2
            ctx.moveTo(55, 70);
            ctx.arc(50, 70, 7, 0, Math.PI * 2, true);  // 3
            ctx.moveTo(55, 90);
            ctx.arc(50, 90, 7, 0, Math.PI * 2, true);  // 4
            ctx.moveTo(95, 70);
            ctx.arc(90, 70, 7, 0, Math.PI * 2, true);  // 5
            ctx.moveTo(95, 90);
            ctx.arc(90, 90, 7, 0, Math.PI * 2, true);  // 6
            ctx.fill();
            
        break;
        default: 
            //clear out previous dice
            ctx.clearRect(0,0,140,140);
            
            //create dice square
            ctx.fillStyle="#F3F3F3";
            ctx.fillRect(20, 20, 100, 100);

            //draw smily on the dice
            ctx.beginPath();
            ctx.arc(70, 72, 37, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(90, 75);
            ctx.arc(70, 75, 20, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.moveTo(60, 60);
            ctx.arc(55, 60, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(90, 60);
            ctx.arc(85, 60, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        }
    var activePlayerOne = document.getElementById("activePlayerOne");
    var activePlayerTwo = document.getElementById("activePlayerTwo");
    if(isEven(countClicksOnButton)){
        
        activeToken(playerOne, playerOneId, playerTwoId);
            //if roll 6, roll again
        if(roll === 6){
            //animate and style passive and active tokens
            playerOneId.style.animation = "shake1 0.5s";
            playerOneId.style.animationIterationCount = "5";

            activePlayerTwo.style.filter = "opacity(30%)";
            activePlayerTwo.style.transition = "all 2s";
            activePlayerOne.style.filter = "opacity(100%)";
            activePlayerOne.style.transition = "all 4s";
            if(roll === 6){
                //animate token again
                playerOneId.style.animation = "shake2 0.5s";
                playerOneId.style.animationIterationCount = "5";
                if(roll === 6){
                    //animate token the third time
                    playerOneId.style.animation = "shake3 0.5s";
                    playerOneId.style.animationIterationCount = "5";
                }
            }
            
        } else{
            activePlayerOne.style.filter = "opacity(30%)";
            activePlayerOne.style.transition = "all 2s";
            activePlayerTwo.style.filter = "opacity(100%)";
            activePlayerTwo.style.transition = "all 4s";
        }
        if(playerOneId.dataset.number >= 31){
            document.getElementById('slideInText').style.opacity = "100%";
            slideInText("<i class='fas fa-dragon'></i> WE GOT A WINNER! <i class='fas fa-dragon fa-flip-horizontal'></i>", "superGood");
            document.getElementById("rollDice").style.display = "none"; 
            document.getElementById("rollAgain").style.display = "none";
            document.getElementById("rollAgain2").style.display = "none";
            localStorage.removeItem(localStorage.key(1));
            relocateWinner();
        }        
       
    } else {
        activeToken(playerTwo, playerTwoId, playerOneId);
        if(roll === 6){
            //animate and style passive and active tokens
            playerTwoId.style.animation = "shake1 0.5s";
            playerTwoId.style.animationIterationCount = "5";

            activePlayerOne.style.filter = "opacity(30%)";
            activePlayerOne.style.transition = "all 2s";
            activePlayerTwo.style.filter = "opacity(100%)";
            activePlayerTwo.style.transition = "all 4s";
            if(roll === 6){
                //animate token again
                playerTwoId.style.animation = "shake2 0.5s";
                playerTwoId.style.animationIterationCount = "5";
                if(roll === 6){
                    //animate token again
                    playerTwoId.style.animation = "shake3 0.5s";
                    playerTwoId.style.animationIterationCount = "5";
                }
            
            }
        } else{
            activePlayerTwo.style.filter = "opacity(30%)";
            activePlayerTwo.style.transition = "all 2s";
            activePlayerOne.style.filter = "opacity(100%)";
            activePlayerOne.style.transition = "all 4s";
        }
        if(playerTwoId.dataset.number >= 31){
            document.getElementById('slideInText').style.opacity = "100%";
            slideInText("<i class='fas fa-dragon'></i> WE GOT A WINNER! <i class='fas fa-dragon fa-flip-horizontal'></i>", "superGood");
            document.getElementById("rollDice").style.display = "none"; 
            document.getElementById("rollAgain").style.display = "none";
            document.getElementById("rollAgain2").style.display = "none";
            localStorage.removeItem(localStorage.key(0));
            relocateWinner();
        }
    }
};

//CREATING NEW TILES
var t1 = new Tile(1, "odd", "noTrap");
var t2 = new Tile(2, "even", "endTrap2");
var t3 = new Tile(3, "odd", "endTrap3");
var t4 = new Tile(4, "even", "trap1" );
var t5 = new Tile(5, "odd", "noTrap");
var t6 = new Tile(6, "even", "noTrap");
var t7 = new Tile(7, "odd", "trap2");
var t8 = new Tile(8, "even", "noTrap");
var t9 = new Tile(9, "odd", "noTrap");
var t10 = new Tile(10, "even", "trap3");
var t11 = new Tile(11, "odd", "endTrap8");
var t12 = new Tile(12, "even", "noTrap");
var t13 = new Tile(13, "odd", "trap4");
var t14 = new Tile(14, "even", "noTrap");
var t15 = new Tile(15, "odd", "trap5" );
var t16 = new Tile(16, "even", "noTrap");
var t17 = new Tile(17, "odd", "endTrap1");
var t18 = new Tile(18, "even", "noTrap");
var t19 = new Tile(19, "odd", "noTrap");
var t20 = new Tile(20, "even", "noTrap");
var t21 = new Tile(21, "odd", "endTrap7");
var t22 = new Tile(22, "even", "endTrap5");
var t23 = new Tile(23, "odd", "trap6");
var t24 = new Tile(24, "even", "endTrap9");
var t25 = new Tile(25, "odd", "trap7");
var t26 = new Tile(26, "even", "endTrap6");
var t27 = new Tile(27, "odd", "noTrap");
var t28 = new Tile(28, "even", "noTrap");
var t29 = new Tile(29, "odd", "trap8");
var t30 = new Tile(30, "even", "trap9");

t25.displayTile();
t26.displayTile();
t27.displayTile();
t28.displayTile();
t29.displayTile();
t30.displayTile();
t24.displayTile();
t23.displayTile();
t22.displayTile();
t21.displayTile();
t20.displayTile();
t19.displayTile();
t13.displayTile();
t14.displayTile();
t15.displayTile();
t16.displayTile();
t17.displayTile();
t18.displayTile();
t12.displayTile();
t11.displayTile();
t10.displayTile();
t9.displayTile();
t8.displayTile();
t7.displayTile();
t1.displayTile();
t2.displayTile();
t3.displayTile();
t4.displayTile();
t5.displayTile();
t6.displayTile();


//ADDING A SMALL DIV TO SHOW WHICH PLAYER THAT IS ACTIVE

function showActivePlayer(){
    var activePlayer = '<img class="[ player__token--head ]" id="activePlayerOne" src="images/'+ playerOne.name +"Head" +'.png">';
    document.getElementById('activePlayer').innerHTML += activePlayer;
    var activePlayer2 = '<img class="[ player__token--head ]" id="activePlayerTwo" src="images/'+ playerTwo.name +"Head" +'.png">';
    document.getElementById('activePlayer').innerHTML += activePlayer2;
}
showActivePlayer();
