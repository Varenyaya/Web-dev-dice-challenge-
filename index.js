var randomNumber1 = Math.floor((Math.random()*6)+1);
var a = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",a)
var randomNumber2 = Math.floor((Math.random()*6)+1);
var a = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",a)
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 is the winner"
}else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="its a draw"
}else{
    document.querySelector("h1").innerHTML="player 2 is the winner"
}