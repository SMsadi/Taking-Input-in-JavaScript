// We can take user input in JavaScript in two ways
// 1. Easy way = Using Window Prompt
//2. Professional Way = HTML textbox 

// 1. Easy Way

//Taking a string
/*
let name = window.prompt("What's your name ? ");
console.log(name);
*/

// taking a integer or a number
/*
let age = parseInt(window.prompt("How old are you ? "))
console.log(age);
*/



// Professional Way

let username

document.getElementById("submit").onclick= function(){ 
   username = document.getElementById("myText").value; // I am taking the value which has written on it as input 

   // document.getElementById("myh1").textContent= 'Hello ' + username ;
   // document.getElementById("myh1").innerHTML= 'Hello ' + username ;

   document.getElementById("myh1").textContent= `Hello ${username}` ;

}


 