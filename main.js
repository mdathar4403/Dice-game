
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// For image 2

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=("🚩Play 1 wins");
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=("Play 2 wins 🚩");
}
else{
    document.querySelector("h1").innerHTML=("Draw !!👍");
}

document.querySelector("button").addEventListener("click",refersh);

function refersh(){
    window.location.reload();
}
