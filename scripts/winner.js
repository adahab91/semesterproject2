//Display the winner in the Iron Throne
function displayWinner (){
    switch (localStorage.key(0)) {
        case "playerSansa": 
            var showSansa = '<img class="[ winner__char winner__char--sansa ]" src="images/Sansa Stark.png">';
            document.getElementById('winner').innerHTML += showSansa;
        break;
        case "playerSandor": 
            var showSandor = '<img class="[ winner__char winner__char--sandor ]" src="images/Sandor Clegane.png">';
            document.getElementById('winner').innerHTML += showSandor;
        break;
        case "playerSamwell": 
            var showSamwell = '<img class="[ winner__char winner__char--samwell ]" src="images/Samwell Tarly.png">';
            document.getElementById('winner').innerHTML += showSamwell;
        break;
        case "playerVarys": 
            var showVarys = '<img class="[ winner__char winner__char--varys ]" src="images/Varys.png">';
            document.getElementById('winner').innerHTML += showVarys;
        break;
        case "playerJon": 
            var showJon = '<img class="[ winner__char winner__char--jon ]" src="images/Jon Snow.png">';
            document.getElementById('winner').innerHTML += showJon;
        break;
        case "playerMelisandre": 
            var showMelisandre = '<img class="[ winner__char winner__char--melisandre ]" src="images/Melisandre.png">';
            document.getElementById('winner').innerHTML += showMelisandre;
        break;
        case "playerCersei": 
            var showCersei = '<img class="[ winner__char winner__char--cersei ]" src="images/Cersei Lannister.png">';
            document.getElementById('winner').innerHTML += showCersei;
        break;
        case "playerArya": 
            var showArya = '<img class="[ winner__char winner__char--arya ]" src="images/Arya Stark.png">';
            document.getElementById('winner').innerHTML += showArya;
        break;
        case "playerDaenerys": 
            var showDaenerys = '<img class="[ winner__char winner__char--daenerys ]" src="images/Daenerys Targaryen.png">';
            document.getElementById('winner').innerHTML += showDaenerys;
        break;
        case "playerTyrion": 
            var showTyrion = '<img class="[ winner__char winner__char--tyrion ]" src="images/Tyrion Lannister.png">';
            document.getElementById('winner').innerHTML += showTyrion;
        break;
        default:
            console.log('Sorry, there is was no winner');
    }
}
displayWinner();





//UP AND DOWN ARROWS

window.addEventListener("scroll",function(){
    var arrowDisplay1 = document.getElementById("arrowDisplay1");
    if(this.scrollY < 10){
        arrowDisplay1.style.opacity = ".3";
        arrowDisplay1.style.color = "#2A3136";
    }
    else{
        arrowDisplay1.style.color = "#FFA500";
        arrowDisplay1.style.opacity = "1";
    }
});

window.addEventListener("scroll",function(){
    var arrowDisplay2 = document.getElementById("arrowDisplay2");
    var d = document,
        e = d.documentElement;
    if(e.scrollHeight - e.scrollTop === e.clientHeight){
        arrowDisplay2.style.opacity = ".3";
        arrowDisplay2.style.color = "#2A3136";
    }
    else{
        arrowDisplay2.style.color = "#FFA500";
        arrowDisplay2.style.opacity = "1";
    }
});


var upArrow = document.getElementById("upArrow");

upArrow.addEventListener( "click",function(){
        window.scrollBy({ 
        top: -1200, 
        left: 0, 
        behavior: 'smooth' 
    });
});

var downArrow = document.getElementById("downArrow");

downArrow.addEventListener( "click",function(){
        window.scrollBy({ 
        top: 1200, 
        left: 0, 
        behavior: 'smooth' 
    });
});



//COPY LINK

function copyLink() {
  var copyLink = document.getElementById("shareLink");
  copyLink.select();
  document.execCommand("copy");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied Link ";
}

function getOut() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


//SHARE ON FACEBOOK, CODE MADE BY FB DEVELOPMENT TEAM
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


//SHARE ON TWITTER, CODE MADE BY TWITTER DEV TEAM
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));


//copyright
function updateCopyright(){
    var d = new Date()
    var footer = document.getElementById("copyright");

    footer.innerHTML += 'Copyright &copy; ' + d.getFullYear() + ' Ada Elise Håberg';
};
updateCopyright();
