// SETTING THINGS UP

var cardContainer = document.getElementById("cards");
var charArray = [];



var oldUrl = "https://anapioficeandfire.com/api/characters/";
for (var i = 1; i < 2086; i++){
    fetch("https://anapioficeandfire.com/api/characters/" + i)
      .then(result => result.json())
    .then((res) => {
      characterInfo(res);
    })
  .catch(err => console.log(err))
}
console.log(charArray);


/*--
//FINDING THE NUMBERS FOR THE CHARACTERS
function characterInfo(res){
    charArray.push(res);
    for (var i = 1; i < charArray.length; i++){
     if (charArray[i].name === "Khal Drogo"){
       console.log(res)
     }
        
    }
};
characterInfo();--*/

//CREATING THE HEROES
function characterInfo(res){
    charArray.push(res);
    for (var i = 1; i < charArray.length; i++){
     
    
        
    }
};