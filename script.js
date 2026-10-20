//DOM ELEMENTS 
const questionNumber = document.getElementById("questionnumber");
const scoreDisplay = document.getElementById("score");
const questionText = document.getElementById("questiontext");
const answersDisplay = document.getElementById("answers");
const feedBack = document.getElementById("feedback");
const startBtn = document.getElementById("startbtn");
const nextBtn = document.getElementById("nextbtn");

//VARIABLE
let questions = [];   
let currentIndex = 0;
let score = 0;

//START BUTTON 
startBtn.addEventListener("click", function(){
    currentIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;

//API FETCH
fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
    .then(function(response){
        if (!response.ok) {
            throw new Error ("Bad response");
        }
        return response.json();
    })
    .then(function(data){
        questions = data.results;
        console.log(questions);
    })
    .catch(function(){
        questionText.textContent = "bad response"
    });
});
