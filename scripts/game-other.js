//A nice little function for making life easier on laptopscreen
//showing logo with toggle function on nav button
var displayLogo = false;
var logo = document.getElementById("logo");
function showLogo(){
    if(window.innerWidth <= 1368){
        if(displayLogo == false){
            logo.style.display = "block";
            displayLogo = true;
        } else {
            logo.style.display = "none";
            displayLogo = false;
        }
    }
}



//styling odd tiles
function evenAndOdd(){
    var setBackground = document.querySelectorAll(".odd");
    
    for (var y = 0; y < setBackground.length; y++){
        setBackground[y].style.backgroundColor = "#303A40";
        setBackground[y].style.color = "#F3F3F3";
    }
};
evenAndOdd(); 



