var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.ceil(randomNumber1 * 6);
randomNumber2 = Math.ceil(randomNumber2 * 6);

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
