
var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice"+ randomNumber1 + ".png";//dice1.png - dice6.png

var randomImageSource= "images/"+ randomDiceImage; //./image/dice1.png - ./image/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!"//emojis: Press the "Windows" key and "." key at the same time to open the emoji panel.
}

else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=" Player 2 wins!🚩"
}

else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
