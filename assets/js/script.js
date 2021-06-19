const startBtn= document.getElementById('start');
const startgame= document.getElementById("startgame");

const nextButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionsCon');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    
        question1: "Which one of the following is not a JavaScript Data Type?"
        answers: ["Number","String","Bolean","All of the Above"
        correctanswer ="Bolean"]

        question2: "How do you call a function named myFunction? "
        answers:['Function.myFunction', "myFunction()","call myFunction()","call myFunction myFunction()"
        correctanswer= "myFunction()"]
             
    
             quesion3:  "Which of the following is true about variable naming conventions in JavaScript?"
             answers: [ "You should not use any of the JavaScript reserved keyword as variable name",
                          "JavaScript variable names should not start with a numeral (0-9)",
                          "Both of the above",
                          "None of the above",
                          correctanswer= "Both of the above"]
                        
             question4: "Which of the following function of Number object defines how many total digits to display of a number?"
             answers:[
                 "toExponential()","toFixed()","toLocaleString()"," toPrecision()"
                 correctanswer=""
             ]

    
        