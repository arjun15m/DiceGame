var randomNumber1 = Math.floor(Math.random()*6);
randomNumber1 = randomNumber1 + 1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6);
randomNumber2 = randomNumber2 + 1;
console.log(randomNumber2);

if(randomNumber1==1){
    document.querySelector(".img1").setAttribute("src", "dice1.png");
}
else if(randomNumber1==2){
    document.querySelector(".img1").setAttribute("src", "dice2.png");
}
else if(randomNumber1==3){
    document.querySelector(".img1").setAttribute("src", "dice3.png");
}
else if(randomNumber1==4){
    document.querySelector(".img1").setAttribute("src", "dice4.png");
}
else if(randomNumber1==5){
    document.querySelector(".img1").setAttribute("src", "dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "dice6.png");
}



if(randomNumber2==1){
    document.querySelector(".img2").setAttribute("src", "dice1.png");
}
else if(randomNumber2==2){
    document.querySelector(".img2").setAttribute("src", "dice2.png");
}
else if(randomNumber2==3){
    document.querySelector(".img2").setAttribute("src", "dice3.png");
}
else if(randomNumber2==4){
    document.querySelector(".img2").setAttribute("src", "dice4.png");
}
else if(randomNumber2==5){
    document.querySelector(".img2").setAttribute("src", "dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "dice6.png");
}


if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Its a Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player one WON";
}
else{
    document.querySelector("h1").innerHTML = "Player two WON";
}
    
