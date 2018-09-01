
// Variables
let input = document.querySelector('input');
let plusbtn = document.querySelector('#plus-btn');
let minusbtn = document.querySelector('#minus-btn');
let count = 0;
let addMe = document.querySelector(".addMe");



plusbtn.onclick = function(evt) { 

addMe.innerHTML += count + 1;  


  }

  minusbtn.onclick = function(evt) { 

    addMe.innerHTML = count-  input.value;  
   
    
     }

 

// Functions
// function adding() {
  
//   plusbtn.addEventListener('click', function(evt) {

// document.getElementById("number").innerHTML = count += adder;

//   });
  
// }
 
// function subtracting() {

//   minusbtn.addEventListener('click', function(minusbtn) {
//     minus--
//   });
// }
    




// const input = document.querySelector('input');
// const flex = document.querySelector('.flex');
// const plusbtn = document.querySelector('#plus-btn');
// const number = [];

// plusbtn.addEventListener('click', function() {
// number.push(input.value);
// let add = "" ;
// number.forEach(t => add += `<li>${t} </li>`);
// flex.innerHTML = number;
// input.value = "";
// });