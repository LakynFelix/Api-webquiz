const start= document.getElementById('start');
const startgame= document.getElementById("startgame");

const nextButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionsCon');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

// Start Game Function


start.addEventListener('click', startgame() {
   
}
 


// Question array

const questions = [
{
        question1: "Which one of the following is not a JavaScript Data Type?"
        answers: ["Number","wrong"],
                 ["String, wrong"],
                ["Bolean","right"],
              ["All of the Above","wrong"]

        question2: "How do you call a function named myFunction?"
        answers:['Function.myFunction',"wrong"],
         ["myFunction()","right" ],
         ["call myFunction()", "wrong"],
         ["call myFunction myFunction()", "wrong"]        
        
             quesion3: "Which of the following is true about variable naming conventions in JavaScript?"
             answers: ["You should not use any of the JavaScript reserved keyword as variable name","wrong" ],
                      ["JavaScript variable names should not start with a numeral (0-9)","wrong"],
                      ["Both of the above" , "right"],
                      ["None of the above", "wrong"]
                         
                        
             question4: "Which of the following function of Number object defines how many total digits to display of a number?"
             answers:["toFixed()","wrong"],
             ["toExponential()", "wrong"],
             [" toPrecision()","right"],
             ["toLocaleString()","wrong"]
              
             question5: "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?"
             answers: ["fixed()","wrong"],
                 ["fontcolor()","wrong"],
                 ["fontsize()","wrong"],
                 ["italics()","right"]
                
             question6: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?"
             answers:["push()","right"],
                 ["last()","wrong"],
                 ["put()","wrong"],
                 ["None of the above","wrong"]
 }
   ]




// Choose Answer
function answers
// check Answer

// Timer

function timer (){

}


// Loop over every question object
for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);
  
    // Compare answers
    if (
      (answer === right && questions[i].answers === "right") ||
      (answer === wrong && questions[i].answers === "wrong")
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
  
  // Show total at end
  alert('You got ' + score + '/' + questions.length);
  