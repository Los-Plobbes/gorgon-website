let noise = new Audio('./popupassets/sounds/belch.mp3');


function playAGulcheousNoise(){
    noise.play();
}

function closeWindow(){
    window.close();
}

addEventListener("load", (event) => {});

onload = (event) => {
  //  alert(window.outerWidth +" "+ window.outerHeight);
};

addEventListener("resize", (event) => {});

onresize = (event) => {
    if(window.outerWidth != 380 && window.outerHeight != 650){
        window.resizeTo(682,552);
        alert("Why don't you quit that, pal 👎");
        window.resizeTo(682,552);
    }

    if(window.fullScreen){
        window.fullScreen = false;
    }

    

};

function redirect(website){
    window.open(website)
};