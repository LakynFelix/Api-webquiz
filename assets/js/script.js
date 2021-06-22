const start = document.getElementById("start");
const startgame = document.getElementById("startgame");
const nextButton = document.getElementById("next-btn");
const questionsContainerEl = document.getElementById("questionsCon");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btns");
var hScore = 0;


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
    }]

// Start Game Function
start.addEventListener("click", startQuiz)

//  /* start quiz */
function startQuiz() {
    startgame.classList.add("hide");
    questionRandom = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove("hide");
    currentQuestionsIndex = 0;
    nextButton.classList.remove("hide")

    for (var i = 0; i < question.length; i++) {
        console.log(question[i] + answer[0]);
    }
        console.log(questions[2].question)
        console.log(questions[2].answers[0].text)
        console.log(questions[2].answers[1].text)
        console.log(questions[2].answers[2].text)
        console.log(questions[2].answers[3].text)
}

// start time section // 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds; 
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (seconds === 0) {
            alert(" Your Time is up!")
        }
    }, 1000);
}
const time = "2:00min";

start.addEventListener("click", function () {
    var twoMin = 60 * 2,
        display = document.querySelector("#time");
    startTimer(twoMin, display);
});
//end quiz //
var endQuiz = function () {
    console.log("Game Over");
};

// make questions
function showQuestion(question) {
    questionElement.innerText = question.question
    console.log(question)
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// check answer
var checkanswer = function () {
    var scores = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

    return value;
}

if (question === "right") {
    console.log(" You are Correct!");
}
else if (question === "wrong") {
    console.log("Sorry Incorrect");
}

// set local storage

function showQuestion(question) {
    questionElement.innerText = question.question
    console.log(question)
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// get local storage
// make high scores
var playerName = function () {
    var name = "";
}

console.log(" Your High Score " + name + hScore);

var highScore = localStorage.getItem("highscore");
if (highScore === null) {
    highScore = 0;

    //   if correct

    //  hScore = Math.min(10, highScore);
}
// clear high scores
function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Loop questions 
function questionsloop(question) {

    for (var i = 0; i < question.length; i++);
    question.innerText("#question");
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score++;
    }
    score.innerText(" Your Correct")

    // Show total at end
    alert('You got ' + hScore + '/' + question.length);
}