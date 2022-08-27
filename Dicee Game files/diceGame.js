var randomNumber1 = (Math.floor(Math.random()*6))+1;


//alert(randomNumber1);


var randomDiceImage1 = "images/dice" + randomNumber1 +".png";

//alert(randomDiceImage);

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);





var randomNumber2 =(Math.floor(Math.random()*6))+1;

 var randomDiceImage2 ="images/dice"+randomNumber2+".png";
 var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


if(randomNumber1>randomNumber2){
  //alert("randomNumber1 is big");
  document.querySelector("h1").innerHTML = " 🚩 player 1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins! 🚩";
//  alert("randomNumber2 is big");
}
else{
  document.querySelector("h1").innerHTML ="it's 🏁 DRAW ";
//  alert("both are equal");
}
