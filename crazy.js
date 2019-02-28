var a = Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
var b = Math.floor((Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src","images/dice"+b+".png");

if(a>b){
  document.querySelector("h1").innerText = "Player 1 Wins";
}else if (a<b) {
  document.querySelector("h1").innerText = "Player 2 Wins";
}else{
  document.querySelector("h1").innerText = "Draw";
}
