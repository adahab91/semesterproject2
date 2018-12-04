//variables stack
var isSansa = false;
var isArya = false;
var isTyrion = false;
var isCersei = false;
var isVarys = false;
var isDaenerys = false;
var isJon = false;
var isMelisandre = false;
var isSamwell = false;
var isSandor = false;

//RESET LOCAL STORAGE ONLOAD
function resetLocalStorage(){
    localStorage.clear();
};

//ADDS VALUE TO LOCAL STORAGE
function addValuesToLocalStorage(key, value){
    localStorage.setItem(key, value); 
};

//REMOVES VALUE TO LOCAL STORAGE
function removeValueFromLocalStorage(key){
    localStorage.removeItem(key); 
};




//SELECT CHARACTER WITH SWITCH
function selectCharacter(character){ //character is attribute for clickfunction on html
    document.getElementById('showCharacter').innerHTML = "";
    switch (character) {
        case 'sansa':
            if(isSansa){
                document.getElementById(character).style.border = '5px outset #303A40';
                isSansa = false;
                emptyCard();
                removeValueFromLocalStorage("playerSansa");
            }
            else{
                isSansa = true;
                getData('https://anapioficeandfire.com/api/characters/957',character);
                addValuesToLocalStorage("playerSansa", character);
            }
            break;
        case 'arya':
            if(isArya){
                document.getElementById(character).style.border = '5px outset #303A40';
                isArya = false;
                emptyCard();
                removeValueFromLocalStorage("playerArya");
            }
            else{
                isArya = true;
                getData('https://anapioficeandfire.com/api/characters/148',character);
                addValuesToLocalStorage("playerArya", character);
            }
            break;
        case 'tyrion':
            if(isTyrion){
                document.getElementById(character).style.border = '5px outset #303A40';
                isTyrion = false;
                emptyCard();
                removeValueFromLocalStorage("playerTyrion");
            }
            else{
                isTyrion = true;
                getData('https://anapioficeandfire.com/api/characters/1052',character);
                addValuesToLocalStorage("playerTyrion", character);
            }
            break;
        case 'cersei':
            if(isCersei){
                document.getElementById(character).style.border = '5px outset #303A40';
                isCersei = false;
                emptyCard();
                removeValueFromLocalStorage("playerCersei");
            }
            else{
                isCersei = true;
                getData('https://anapioficeandfire.com/api/characters/238',character);
                addValuesToLocalStorage("playerCersei", character);
            }
            break;
        case 'varys':
            if(isVarys){
                document.getElementById(character).style.border = '5px outset #303A40';
                isVarys = false;
                emptyCard();
                removeValueFromLocalStorage("playerVarys");
            }
            else{
                isVarys = true;
                getData('https://anapioficeandfire.com/api/characters/2069',character);
                addValuesToLocalStorage("playerVarys", character);
            }
            break;
        case 'daenerys':
            if(isDaenerys){
                document.getElementById(character).style.border = '5px outset #303A40';
                isDaenerys = false;
                emptyCard();
                removeValueFromLocalStorage("playerDaenerys");
            }
            else{
                isDaenerys = true;
                getData('https://anapioficeandfire.com/api/characters/271',character);
                addValuesToLocalStorage("playerDaenerys", character);
            }
            break;
        case 'jon':
            if(isJon){
                document.getElementById(character).style.border = '5px outset #303A40';
                isJon = false;
                emptyCard();
                removeValueFromLocalStorage("playerJon");
            }
            else{
                isJon = true;
                getData('https://anapioficeandfire.com/api/characters/583',character);
                addValuesToLocalStorage("playerJon", character);
            }
            break;
            case 'melisandre':
            if(isMelisandre){
                document.getElementById(character).style.border = '5px outset #303A40';
                isMelisandre = false;
                emptyCard();
                removeValueFromLocalStorage("playerMelisandre");
            }
            else{
                isMelisandre = true;
                getData('https://anapioficeandfire.com/api/characters/743',character);
                addValuesToLocalStorage("playerMelisandre", character);
            }
            break;
            case 'sandor':
            if(isSandor){
                document.getElementById(character).style.border = '5px outset #303A40';
                isSandor = false;
                emptyCard();
                removeValueFromLocalStorage("playerSandor");
            }
            else{
                isSandor = true;
                getData('https://anapioficeandfire.com/api/characters/955',character);
                addValuesToLocalStorage("playerSandor", character);
            }
            break;
            case 'samwell':
            if(isSamwell){
                document.getElementById(character).style.border = '5px outset #303A40';
                isSamwell = false;
                emptyCard();
                removeValueFromLocalStorage("playerSamwell");
            }
            else{
                isSamwell = true;
                getData('https://anapioficeandfire.com/api/characters/954',character);
                addValuesToLocalStorage("playerSamwell", character);
            }
            break;
        default:
            console.log('Sorry, there is a problem here  ');
    }
}
function getData(Url,id) {
    fetch(Url)
        .then((response) => {
            return response.json();
        })
        .then( (result) => {
            console.log(result);
            populateCardInfo(result, id);
        });
}
function populateCardInfo(result, id){
    document.getElementById(id).style.border = '5px inset orange';
    var displayChar ='<div class="[ col-sm-6 ][ character__image--holder ]">' +
        '<img class="[ ][ character__image ]" src="images/' + result.name + '.png"></div>' +
        '<div class="[ col-sm-6 ][ character__info ]">'+ 
        '<h1 class="[ heading heading--medium character__name ]">' + result.name + '</h1>'+
        '<p class="[ character__born character__stats ]"><span class="[ character__stats--strong ]">Born : </span>' + result.born + '</p>'+
        '<p class="[ character__gender character__stats ]"><span class="[ character__stats--strong ]">Gender : </span>' + result.gender + '</p>'+
        '<p class="[ character__culture character__stats ]"><span class="[ character__stats--strong ]">Culture : </span>' + result.culture + '</p>'+
        '<p class="[ character__title character__stats ]"><span class="[ character__stats--strong ]">Aliases : </span>' + result.aliases + '</p>' +
        '</div>';
    document.getElementById('showCharacter').innerHTML += displayChar;
};

function emptyCard(){
    var displayEmptyCard = '<div id="loading">' +
    '<h2 class="[ heading heading--viewmore display-content ]">Click on a character to view more</h2><i class="[ fab fa-wolf-pack-battalion ][ icon icon__wolf ]"></i></i>' + 
    '</div>';

    document.getElementById('showCharacter').innerHTML += displayEmptyCard;
};
