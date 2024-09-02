function plob(){
    var poo = document.getElementById("plobbutton")
    var e = document.getElementById("plobbutton").innerHTML
    document.getElementById("plobbutton").innerHTML = "Hola, Plob! Me llamo josh!";
    setTimeout(function(){
        document.getElementById("plobbutton").innerHTML = e;
    }, 2000);

}


function saySomething(){
    var text = document.getElementById("TroglodizerTextInput").value;

    
        if(text != "") {
            alert("Blud really said \""+text+"\", what a Plob! 🤣😂");
        }
   
}

//creates a listener for when you press a key
window.onkeyup = keyup;

function keyup(e) {

  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 71) {
    alert("Dawg really thought he could press G and get away with it 😭😭😭😭😭😭 Is blud a troll 👹🧌? Or a gremlin 🧝?")
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function wopen(url, name, w, h) {

  w += 32;
  h += 96;
  wleft = (screen.width - w) / 2;
  wtop = (screen.height - h) / 2;

  if (wleft < 0) {
    w = screen.width;
    wleft = 0;
  }
  if (wtop < 0) {
    h = screen.height;
    wtop = 0;
  }
  if (wleft > 0) {
    wleft = Math.floor(Math.random() * wleft); // for example
  }
  var win = window.open(url, name,
    'width=' + w + ',height=' +h+ ',left=' + wleft + ',top=' + wtop + ",popup");

  win.focus();
}

let sound = new Audio('./assets/sounds/error.mp3');



function doYouGetToGoToHome() {
  var random =  getRandomArbitrary(0,100);
  if(random < 120){
    
    sound.play();

    wopen("./popups/"+Math.round(getRandomArbitrary(1,3))+".html","Gorgon Window",650,380)
  }else{
    window.location.href = "index.html";
  }
}