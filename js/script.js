var randomNumber1= Math.floor( Math.random() * 6) + 1;

 var randomImage= "dice" + randomNumber1 + ".png";   //dice1.png -  dice6.png 

 var randomImageSource = "images/" +randomImage;    //images/dice1.png -dice6.png

 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSource); 



 var randomNumber2 = Math.floor( Math.random() * 6) + 1;

 var randomImage2= "images/dice" + randomNumber2 + ".png";   //dice1.png -  dice6.png 

 var image2= document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomImage2); 


 if(randomNumber1 > randomNumber2){
     document.querySelector("div>h1").innerHTML="Player 1 Wins"
 }

  else if(randomNumber2 > randomNumber1){
    document.querySelector("div>h1").innerHTML="Player 2 Wins"

}
else{
    document.querySelector("div>h1").innerHTML="Draw"
}


