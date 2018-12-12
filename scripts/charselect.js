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
var countCharacters = 0;

function resetLocalStorage(){
    localStorage.clear();
};

function addValuesToLocalStorage(key, value){
    localStorage.setItem(key, value); 
};

function removeValueFromLocalStorage(key){
    localStorage.removeItem(key);  
};

function onLoadSetDelay() {
    setTimeout(function(){ 
        document.getElementById('overlayBeforeLoad').style.display = 'none';
    }, 1500);
}
onLoadSetDelay();

function onlyTwoChar(){
    document.getElementById('onlyTwo').style.display = 'block';
    setTimeout(function(){ 
        document.getElementById('onlyTwo').style.display = 'none';
    }, 1500);
}

function selectCharacter(character){ 
        document.getElementById('showCharacter').innerHTML = "";
        switch (character) {
            case 'sansa':
                if(isSansa){
                    document.getElementById(character).style.border = '';
                    isSansa = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerSansa");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters);
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isSansa = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerSansa");
                        onlyTwoChar();
                    } else {
                        isSansa = true;
                    getData('https://anapioficeandfire.com/api/characters/957',character);
                    addValuesToLocalStorage("playerSansa", character);
                    countCharacters = countCharacters + 1; 
                    console.log(countCharacters);
                    }
                    
                }
                break;
            case 'arya':
             
                if(isArya){
                    document.getElementById(character).style.border = '';
                    isArya = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerArya");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters);
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isArya = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerArya");
                        onlyTwoChar();
                    } else {
                        isArya = true;
                        getData('https://anapioficeandfire.com/api/characters/148',character);
                        addValuesToLocalStorage("playerArya", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }
                     
                }
                break;
            case 'tyrion':
             
                if(isTyrion){
                    document.getElementById(character).style.border = '';
                    isTyrion = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerTyrion");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters);
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isTyrion = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerTyrion");
                        onlyTwoChar();
                    } else {
                        isTyrion = true;
                        getData('https://anapioficeandfire.com/api/characters/1052',character);
                        addValuesToLocalStorage("playerTyrion", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }
                }
                break;
            case 'cersei':
             
                if(isCersei){
                    document.getElementById(character).style.border = '';
                    isCersei = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerCersei");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters);
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isCersei = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerCersei");
                        onlyTwoChar();
                    } else {
                        isCersei = true;
                        getData('https://anapioficeandfire.com/api/characters/238',character);
                        addValuesToLocalStorage("playerCersei", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }
                }
                break;
            case 'varys':
             
                if(isVarys){
                    document.getElementById(character).style.border = '';
                    isVarys = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerVarys");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isVarys = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerVarys");
                        onlyTwoChar();
                    } else {
                        isVarys = true;
                        getData('https://anapioficeandfire.com/api/characters/2069',character);
                        addValuesToLocalStorage("playerVarys", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    } 
                }
                break;
            case 'daenerys':
                if(isDaenerys){
                    document.getElementById(character).style.border = '';
                    isDaenerys = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerDaenerys");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isDaenerys = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerDaenerys");
                        onlyTwoChar();
                    } else {
                        isDaenerys = true;
                        getData('https://anapioficeandfire.com/api/characters/271',character);
                        addValuesToLocalStorage("playerDaenerys", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }  
                }
                break;
            case 'jon':
                if(isJon){
                    document.getElementById(character).style.border = '';
                    isJon = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerJon");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isJon = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerJon");
                        onlyTwoChar();
                    } else {
                        isJon = true;
                        getData('https://anapioficeandfire.com/api/characters/583',character);
                        addValuesToLocalStorage("playerJon", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }   
                }
            break;
            case 'melisandre':
                if(isMelisandre){
                    document.getElementById(character).style.border = '';
                    isMelisandre = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerMelisandre");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isMelisandre = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerMelisandre");
                        onlyTwoChar();
                    } else {
                        isMelisandre = true;
                        getData('https://anapioficeandfire.com/api/characters/743',character);
                        addValuesToLocalStorage("playerMelisandre", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }   
                }
            break;
            case 'sandor':
                if(isSandor){
                    document.getElementById(character).style.border = '';
                    isSandor = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerSandor");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isSandor = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerSandor");
                        onlyTwoChar();
                    } else {
                        isSandor = true;
                        getData('https://anapioficeandfire.com/api/characters/955',character);
                        addValuesToLocalStorage("playerSandor", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    }   
                }
            break;
            case 'samwell':
                if(isSamwell){
                    document.getElementById(character).style.border = '';
                    isSamwell = false;
                    emptyCard();
                    removeValueFromLocalStorage("playerSamwell");
                    countCharacters = countCharacters - 1; 
                    console.log(countCharacters); 
                }
                else{
                    if (countCharacters >= 2){
                        document.getElementById(character).style.border = '';
                        isSamwell = false;
                        emptyCard();
                        removeValueFromLocalStorage("playerSamwell");
                        onlyTwoChar();
                    } else {
                        isSamwell = true;
                        getData('https://anapioficeandfire.com/api/characters/954',character);
                        addValuesToLocalStorage("playerSamwell", character);
                        countCharacters = countCharacters + 1; 
                        console.log(countCharacters);
                    } 
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
