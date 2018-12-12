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


function resetLocalStorage(){
    localStorage.clear();
};

function addValuesToLocalStorage(key, value){
    localStorage.setItem(key, value); 
};

function removeValueFromLocalStorage(key){
    localStorage.removeItem(key);  
};

function selectCharacter(character){ 
    document.getElementById('showCharacter').innerHTML = "";
    switch (character) {
        case 'sansa':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isSansa){
                document.getElementById(character).style.border = '';
                isSansa = false;
                emptyCard();
                removeValueFromLocalStorage("playerSansa");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isSansa = true;
                getData('https://anapioficeandfire.com/api/characters/957',character);
                addValuesToLocalStorage("playerSansa", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'arya':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isArya){
                document.getElementById(character).style.border = '';
                isArya = false;
                emptyCard();
                removeValueFromLocalStorage("playerArya");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isArya = true;
                getData('https://anapioficeandfire.com/api/characters/148',character);
                addValuesToLocalStorage("playerArya", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'tyrion':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isTyrion){
                document.getElementById(character).style.border = '';
                isTyrion = false;
                emptyCard();
                removeValueFromLocalStorage("playerTyrion");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isTyrion = true;
                getData('https://anapioficeandfire.com/api/characters/1052',character);
                addValuesToLocalStorage("playerTyrion", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'cersei':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isCersei){
                document.getElementById(character).style.border = '';
                isCersei = false;
                emptyCard();
                removeValueFromLocalStorage("playerCersei");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isCersei = true;
                getData('https://anapioficeandfire.com/api/characters/238',character);
                addValuesToLocalStorage("playerCersei", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'varys':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isVarys){
                document.getElementById(character).style.border = '';
                isVarys = false;
                emptyCard();
                removeValueFromLocalStorage("playerVarys");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isVarys = true;
                getData('https://anapioficeandfire.com/api/characters/2069',character);
                addValuesToLocalStorage("playerVarys", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'daenerys':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isDaenerys){
                document.getElementById(character).style.border = '';
                isDaenerys = false;
                emptyCard();
                removeValueFromLocalStorage("playerDaenerys");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isDaenerys = true;
                getData('https://anapioficeandfire.com/api/characters/271',character);
                addValuesToLocalStorage("playerDaenerys", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            break;
        case 'jon':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isJon){
                document.getElementById(character).style.border = '';
                isJon = false;
                emptyCard();
                removeValueFromLocalStorage("playerJon");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isJon = true;
                getData('https://anapioficeandfire.com/api/characters/583',character);
                addValuesToLocalStorage("playerJon", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
        break;
        case 'melisandre':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isMelisandre){
                document.getElementById(character).style.border = '';
                isMelisandre = false;
                emptyCard();
                removeValueFromLocalStorage("playerMelisandre");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isMelisandre = true;
                getData('https://anapioficeandfire.com/api/characters/743',character);
                addValuesToLocalStorage("playerMelisandre", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
        break;
        case 'sandor':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isSandor){
                document.getElementById(character).style.border = '';
                isSandor = false;
                emptyCard();
                removeValueFromLocalStorage("playerSandor");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isSandor = true;
                getData('https://anapioficeandfire.com/api/characters/955',character);
                addValuesToLocalStorage("playerSandor", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
        break;
        case 'samwell':
        document.getElementById('overlayBeforeLoad').style.display = 'block';
            if(isSamwell){
                document.getElementById(character).style.border = '';
                isSamwell = false;
                emptyCard();
                removeValueFromLocalStorage("playerSamwell");
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
            else{
                isSamwell = true;
                getData('https://anapioficeandfire.com/api/characters/954',character);
                addValuesToLocalStorage("playerSamwell", character);
                document.getElementById('overlayBeforeLoad').style.display = 'none';
            }
        break;
        default:
            console.log('Sorry, there is a problem here');
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
    let displayChar ='<div class="[ col-sm-6 ][ character__image--holder ]">' +
        '<img class="[ ][ character__image ]" src="images/' + result.name + '.png"></div>' +
        '<div class="[ col-sm-6 ][ character__info ]">'+ 
        '<h1 class="[ heading heading--medium character__name ]">' + result.name + '</h1>'+
        '<p class="[ character__born character__stats ]"><span class="[ character__stats--strong ]">Born : </span>' + result.born + '</p>'+
        '<p class="[ character__gender character__stats ]"><span class="[ character__stats--strong ]">Gender : </span>' + result.gender + '</p>'+
        '<p class="[ character__culture character__stats ]"><span class="[ character__stats--strong ]">Culture : </span>' + result.culture + '</p>'+
        '<p class="[ character__title character__stats ]"><span class="[ character__stats--strong ]">Aliases : </span>' + result.aliases + '</p>' +
        '</div>';
    document.getElementById('showCharacter').innerHTML = displayChar;
};

function emptyCard(){
    let displayEmptyCard = '<div id="loading">' +
    '<h2 class="[ heading heading--viewmore display-content ]">Click on a character to view more</h2><i class="[ fab fa-wolf-pack-battalion ][ icon icon__wolf ]"></i></i>' + 
    '</div>';

    document.getElementById('showCharacter').innerHTML += displayEmptyCard;
};
