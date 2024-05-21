var randomNumberOne = Math.floor(Math.random() * 6) + 1;
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

var imageOne = document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumberOne +".png")
var imageTwo = document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumberTwo +".png")

if(randomNumberOne === randomNumberTwo) {
    document.querySelector("h1").textContent = "Refresh Again";
} else if(randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").textContent = "🥇Player 1 Wins";
} else{
    document.querySelector("h1").textContent = "🥇Player 2 Wins";
}