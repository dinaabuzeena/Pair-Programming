'use strict'

let theName=  prompt ("what is your Name?")
 console .log("welcome"+ theName +"to my webpage")
 alert("welcome"+ theName +"to my webpage")
 
 let score =0;
function myPhone(){
    let phone= prompt("is my phone Iphone?");
 switch(phone.toLowerCase()){
        case'yes':
        case'y':
            score++;
            console.log(score);
            alert("my phone is Iphone");
            break;
        case'no':
        case'n':
            console.log(score);
            alert("your answer is wronge");
            break;

 }

}
myPhone();




 function myFavoriteColor(){
       let color= prompt("is my favorite color white?");
 switch(color.toLowerCase()){
        case'yes':
        case'y':
        score++;
            console.log(score);
            alert("my favorite color is  white");
            break;
        case'no':
        case'n':
            console.log(score);
            alert("your answer is wronge");
            break;

 }

}
myFavoriteColor();








 function mycar(){
    let car= prompt("is my car BMW?");
 switch(car.toLowerCase()){
        case'yes':
        case'y':
            score++;
            console.log(score);
            alert("my car BMW");
            break;
        case'no':
        case'n':
            console.log(score);
            alert("your answer is wronge");
            break;

 }

}
mycar();






 
 function myFavoriteMovie(){
    let movie= prompt("is my favorite movie froozen?");
 switch(movie.toLowerCase()){
        case'yes':
        case'y':
            score++;
            console.log(score);
            alert("my favorite movie froozen");
            break;
        case'no':
        case'n':
            console.log(score);
            alert("your answer is wronge");
            break;

 }

}
myFavoriteMovie();





 function myAge(){
    let age= prompt("is my age above 20 years?");
 switch(age.toLowerCase()){
        case'yes':
        case'y':
            score++;
            console.log(score);
            alert("my age above 20 years");
            break;
        case'no':
        case'n':
            console.log(score);
            alert("your answer is wronge");
            break;

 }

}
myAge();










  function FavoriteNumber(){
    let number= prompt(" what is my FavoriteNumber?")
    number= parseInt(number);
      for(let guess=0 ; guess<4 ; guess++){
          if(number==7){
              console.log("correct")
           alert("correct")
           score++;
           break;
           }else if(number<7){
             console.log(number)
              alert("too low");
              number= prompt("hi user what is my FavoriteNumber?")
        }else if(number>7){
             console.log(number)
          alert("too high")
          number= prompt("hi user what is my FavoriteNumber?")
    
          }
      }
      alert("my FavoriteNumber is 7")
 }


FavoriteNumber();



       
    
 


function myFavoriteFood(){
    let myFood=['Hummus','Manakeesh','Falafel','Tabouleh','Shawarma','Kofta'];

for(let i=0;i<6;i++){
    let userInput= prompt(" what is my Favoritefood?");
    for(let x=0;x<myFood.length;x++){

        if(userInput==myFood[x]){
             var flag= confirm("correct");
             if(flag==1){
                 break;
             }
            score++;
            i==7
         
        }
    }

    break;

}
}

myFavoriteFood();