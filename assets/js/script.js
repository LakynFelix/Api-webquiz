const start = document.getElementById("start");
const startgame = document.getElementById("startgame");
const nextButton = document.getElementById("next-btn");
const questionsContainerEl = document.getElementById("questionsCon");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btns");
var hScore = 0;

console.log(question);
console.log(question.length);
console.log(question[0]);
console.log(question[5]);

// Start Game Function
start.addEventListener("click", startQuiz())
// Question array
const questions = [
    {
        question: 'Commonly used data types DO NOT include: _______.',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false },
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within ________.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curle brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in Java Script are used to store _________.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A useful tool for debugging during development for printing content to the debugger is _______',
        answers: [
            { text: 'GitBash/Terminal', correct: false },
            { text: 'console', correct: true },
            { text: 'Java Script', correct: false },
            { text: 'for loops', correct: false }
        ]
    }
   


 /* start quiz */
 function startQuiz() {
    startarea.classList.add("hide");
    questionsRandom = question.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove("hide");
    currentQuestionsIndex = 0;
    nextQuestion();
    nextButton.classList.remove("hide")
 
    for(var i = 0; i < question.length; i++) {
        console.log(question[2].question)
 console.log(questions[2].answer[0].text)
 console.log(questions[2].answer[1].text)
 console.log(questions[2].answer[2].text)
 console.log(questions[2].answer[3].text)
 console.log(questions[2].answer[4].text)
 console.log(questions[2].answer[5].text)
    }
      //  console.log(question[i]  + answer [0]);
      }
      endQuiz();





// start time section // 
const startimer 
 const gametime = "2:00min";
 


// End time //


if (startimer === 0) {
    console.log(" Time is up");
    elseif 
        console.log(" Your Time Remaining is"+ "time");
      }


//end quiz //
var endQuiz = function() {
    window.alert("The game has now ended. Let's see how you did!");
  };
 
// make questions
  function showQuestion(questions) {
    questionElement.innerText = questions.question
    console.log(questions)
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

// check answer
 var checkanswer = function() {
    var scores = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  
    return value;
  }

if (question === "right") {
    console.log(" You are Correct!") ;
  }
  else if (question === "wrong") {
    console.log("Sorry Incorrect");
  }
  

// set local storage
// get local storage
// make high scores
var playerName = function() {
    var name = "";
}
var highScore = function() {
  

  var highScore = Math.floor(Math.random() 

  return hScore;


};
console.log(" You High Score "+ name + hScore);

var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  if correct}
 hScore = Math.min(10, highScore);

// clear high scores
function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Loop questions 
for (var i = 0; i < questions.length; i++) {

  var answer = confirm(questions[i].question);
  
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