var randomNumber1 = Math.random();
randomNumber1= Math.floor(randomNumber1*6);
randomNumber1 = randomNumber1 + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);




var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


var changeHeading = document.querySelector("h1");
if(randomNumber1 > randomNumber2)
{
    changeHeading.innerHTML = "Player 1 wins!!!!";
}
if(randomNumber1 < randomNumber2)
{
    changeHeading.innerHTML = "Player 2 wins!!!!";
}
if(randomNumber1 === randomNumber2)
{
    changeHeading.innerHTML = "Draw!!!!";
}