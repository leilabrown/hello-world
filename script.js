//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var greenScore = 0;
var chamScore = 0;
var thaiScore = 0;
var earlScore = 0;

var result= document.getElementById("result");


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", cham);
q1a2.addEventListener("click", thai);
q1a3.addEventListener("click", green);
q1a4.addEventListener("click", earl);

q2a1.addEventListener("click", green);
q2a2.addEventListener("click", earl);
q2a3.addEventListener("click", thai);
q2a4.addEventListener("click", cham);

q3a1.addEventListener("click", thai);
q3a2.addEventListener("click", cham);
q3a3.addEventListener("click", earl);
q3a4.addEventListener("click", green);

q4a1.addEventListener("click", earl);
q4a2.addEventListener("click", green);
q4a3.addEventListener("click", cham);
q4a4.addEventListener("click", thai);

restart.addEventListener("click", restart);

//#TODO: Define quiz functions here
function green(){
  greenScore+=1;
  questionCount+=1;
  //alert("green");
  if (questionCount >= 4) {
    updateResult();
  }
}
function cham(){
  chamScore+=1;
  questionCount+=1;
  //alert("cham");
  if (questionCount >= 4) {
    updateResult();
  }
}
function thai(){
  thaiScore+=1;
  questionCount+=1;
  //alert("thai");
  if (questionCount >= 4) {
    updateResult();
  }
}
function earl(){
  earlScore+=1;
  questionCount+=1;
  //alert("earl");
  if (questionCount >= 4) {
    updateResult();
  }
}
//functions for one main result
function updateResult(){
  if (greenScore>=3){
    result.innerHTML="Green tea!";
  }
  else if (chamScore>=3){
    result.innerHTML="Chamomile tea!";
  }
  else if (thaiScore>=3){
    result.innerHTML="Thai iced tea!";
  }
  else if (earlScore>=3){
    result.innerHTML="Earl Grey tea!";
  }
//functions for mixed results
  else if (greenScore==2 && chamScore==2){
    result.innerHTML="You're a mix of chamomile tea and green tea!";
  }
  else if (greenScore==2 && thaiScore==2){
    result.innerHTML="You're a mix of green tea and Thai iced tea!";
  }
   else if (greenScore==2 && earlScore==2){
    result.innerHTML="You're a mix of earl grey and green tea!";
  }
   else if (chamScore==2 && thaiScore==2){
    result.innerHTML="You're a mix of Thai iced tea and chamomile tea!";
  }
   else if (chamScore==2 && earlScore==2){
    result.innerHTML="You're a mix of earl grey tea and chamomile tea!";
  }
   else if (thaiScore==2 && earlScore==2){
    result.innerHTML="You're a mix of Thai iced tea and earl grey tea!";
  }
  //too many teas function
  else {
    result.innerHTML="You're a mix of many different teas... maybe go with coffee instead?";
  }
}
