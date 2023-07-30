var rand_num1=Math.floor((Math.random() * 6) + 1);
var rand_out1="images/dice"+rand_num1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rand_out1);


var rand_num2=Math.floor((Math.random() * 6) + 1);
var rand_out2="images/dice"+rand_num2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rand_out2);


if(rand_num1>rand_num2){
    document.querySelector('h1').innerHTML="🚩 Play 1 Wins!";
}
else if(rand_num2>rand_num1){
    document.querySelector('h1').innerHTML="Play 2 Wins! 🚩";
}
else{
    document.querySelector('h1').innerHTML="Draw!"
}