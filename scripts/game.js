//SETTING THINGS UP

//display tiles
function displayTile(){
    var tile ='<div class="[ col-sm ][ tile ' + this.oddEven +  ' ]" data-tilenumber="' + this.number + '">' +
    '<p class="[ tile__number ]">' + this.number + '</p>' +
    '</div>';
    document.getElementById('showTile').innerHTML += tile;
}

//create object definition for tiles
function Tile(number, oddEven, xCoord, yCoord ){
    this.number = number;
    this.oddEven = oddEven;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.displayTile = displayTile;
}


//Display playertokens
function displayTokens(){
    //var token = '<img class="[ game-board__token ]" id="token1" src="images/'+this.name+'.png" width="100px" height="100px">';
    var token = '<img class="[ player__token ]" id="'+this.id+'" data-number="'+ this.number +'" src="images/ghost.png" width="100px" height="100px">';
    document.getElementById('playerToken').innerHTML += token;
    document.getElementById('playerToken').style
}

//Create object definition for playertokens
function Player(name, number, xCoord, yCoord, id ){
    this.name = name;
    this.number = number;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.id = id;
    this.displayTokens = displayTokens;
};

//creating new tokens
var playerOne = new Player(localStorage.key(0), 0, -40, 650, "playerOne");
var playerTwo = new Player(localStorage.key(1), 0, 0, 0, "playerTwo");

playerOne.displayTokens();
playerTwo.displayTokens();
console.log(playerOne);
console.log(playerTwo);

/* function movePlayerAfterCoordinates(player){
    player.style.left = player.xCoord + 'px'; 
    player.style.top = player.yCoord + 'px'; 
}; */



//Dice
var countClicksOnButton = 0;
var playerOneId = document.getElementById("playerOne");
var playerTwoId = document.getElementById("playerTwo");
function rollDice(){

    //Get random number
    const max = 6;
    var roll = Math.ceil(Math.random()* max);
    console.log("your rolled " + roll);

    //count number of clicks on button to decide wich turn it is
    countClicksOnButton += 1;
    console.log(countClicksOnButton);


    //create new number for token after dice roll
    playerOne.number = playerOne.number + roll;
    console.log("playerONe new number = " + playerOne.number);

    //change dataset for character
    playerOneId.dataset.number = playerOne.number;

/*     if(countClicksOnButton%2 === 0 ){
        playerOne.number = playerOne.number + roll;
        console.log("playerONe new number = " + playerOne.number);
    } else {
        playerTwo.number = playerTwo.number + roll;
        console.log("playerONe new number = " + playerOne.number);
    } */

    //SELECT CHARACTER WITH SWITCH



    /* if(playerOne.number == 1){
        playerOne.xCoord = 10;
        playerOne.yCoord = 650;
    } */
/*     
     
        var elem = document.getElementById("playerOne");   
        var posX = playerOne.xCoord;
        var posY = playerOne.yCoord;
        var id = setInterval(frame, 5);
        function frame() {
            if (posX == 40) {
            clearInterval(id);
            } else {
            posX++; 
            elem.style.left = posX + 'px'; 
            elem.style.top = posY + 'px'; 
            }
        } */
}    
//Move character





//creating new tiles
var t1 = new Tile(1, "odd", 0, 0);
var t2 = new Tile(2, "even", 0,0);
var t3 = new Tile(3, "odd", 0, 0);
var t4 = new Tile(4, "even", 0,0);
var t5 = new Tile(5, "odd", 0, 0);
var t6 = new Tile(6, "even", 0,0);
var t7 = new Tile(7, "odd", 0, 0);
var t8 = new Tile(8, "even", 0,0);
var t9 = new Tile(9, "odd", 0, 0);
var t10 = new Tile(10, "even", 0,0);
var t11 = new Tile(11, "odd", 0,0);
var t12 = new Tile(12, "even", 0,0);
var t13 = new Tile(13, "odd", 0,0);
var t14 = new Tile(14, "even", 0,0);
var t15 = new Tile(15, "odd", 0,0);
var t16 = new Tile(16, "even", 0,0);
var t17 = new Tile(17, "odd", 0,0);
var t18 = new Tile(18, "even", 0,0);
var t19 = new Tile(19, "odd", 0,0);
var t20 = new Tile(20, "even", 0,0);
var t21 = new Tile(21, "odd", 0,0);
var t22 = new Tile(22, "even", 0,0);
var t23 = new Tile(23, "odd", 0,0);
var t24 = new Tile(24, "even", 0,0);
var t25 = new Tile(25, "odd", 0,0);
var t26 = new Tile(26, "even", 0,0);
var t27 = new Tile(27, "odd", 0,0);
var t28 = new Tile(28, "even", 0,0);
var t29 = new Tile(29, "odd", 0,0);
var t30 = new Tile(30, "even", 0,0);

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

console.log(t1);

//styling odd tiles
function evenAndOdd(){
    var setBackground = document.querySelectorAll(".odd");
    
    for (var y = 0; y < setBackground.length; y++){
        setBackground[y].style.backgroundColor = "#303A40";
        setBackground[y].style.color = "white";
    }
};
evenAndOdd(); 
