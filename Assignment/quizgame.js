"use strict";

let quizQuestions = [
    {
        question: "Who is your Instructor?",
        options: ["Miss Kiki", "Mr Kola", "Mr Dami", "Miss Promise"],
        correctAnswer: "Mr Dami",
        chosen: ""
    },

    {
        question: "What is 2 × 2?",
        options: ["2", "4", "12", "10"],
        correctAnswer: "4",
        chosen: ""
    },

    {
        question: "Who is known as the father of computers?",
        options: ["Albert Einstein", "Isaac Newton", "Charles Babbage", "Alan Turing"],
        correctAnswer: "Charles Babbage",
        chosen: ""
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
        chosen: ""
    },

    {
        question: "What color do you get when you mix red and blue?",
        options: ["Pink", "Purple", "Orange", "Brown"],
        correctAnswer: "Purple",
        chosen: ""
    },

    {
        question: "What is 12 ÷ 3?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        chosen: ""
    },

    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        correctAnswer: "Skin",
        chosen: ""
    },

    {
        question: "Which device is used to input text into a computer?",
        options: ["Monitor", "Keyboard", "Speaker", "Mouse"],
        correctAnswer: "Keyboard",
        chosen: ""
    },

    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "High Transfer Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
        chosen: ""
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: "Lion",
        chosen: ""
    },

    {
        question: "What is 9 squared (9²)?",
        options: ["18", "81", "27", "90"],
        correctAnswer: "81",
        chosen: ""
    },

    {
        question: "Which ocean is the largest in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
        chosen: ""
    },

    {
        question: "What is H₂O commonly known as?",
        options: ["Salt", "Water", "Oxygen", "Acid"],
        correctAnswer: "Water",
        chosen: ""
    },

    {
        question: "Which country is known as the 'Giant of Africa'?",
        options: ["Ghana", "Nigeria", "South Africa", "Kenya"],
        correctAnswer: "Nigeria",
        chosen: ""
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/*", "#", "<!-- -->"],
        correctAnswer: "//",
        chosen: ""
    },

    {
        question: "How many hours make a day?",
        options: ["10", "12", "24", "36"],
        correctAnswer: "24",
        chosen: ""
    },

    {
        question: "In computing, what does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"],
        correctAnswer: "Central Processing Unit",
        chosen: ""
    },

    {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"],
        correctAnswer: "Photosynthesis",
        chosen: ""
    },

    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "Africa", 
        chosen: ""
    },

    {
        question: "What is 5 × 6?",
        options: ["10", "20", "30", "60"],
        correctAnswer: "30",
        chosen: ""
    },
]

let currentIndex = 0;
let userAnswers = [];

function display(){
let questionNum = document.getElementById("questionNum");
let showQuestion = document.getElementById("showQuestion");
let optionsContainer = document.getElementById("optionsContainer");

let currentQuestion = quizQuestions[currentIndex];
questionNum.innerHTML = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
showQuestion.innerHTML = currentQuestion.question;

optionsContainer.innerHTML = "";

currentQuestion.options.forEach(item => {
    let isChecked = userAnswers[currentIndex] === item ? "checked" : "";
    
    optionsContainer.innerHTML += `
    <input type="radio" name="option" value="${item}" ${isChecked} style="margin-bottom : 12px" /> ${item} <br />
    `
})



}
display()


function goLeft() {
    if(currentIndex > 0) {
       currentIndex -- 
        display()
    }

    
}

function goRight() {
     let options = document.getElementsByName("option");
    let selectedOption = Array.from(options).find(option => option.checked);  

    
    if (!selectedOption) {
        alert("Please select an option before moving to the next question!😊");
        return; 
    }

    userAnswers[currentIndex] = selectedOption.value;

    if(currentIndex < quizQuestions.length-1){
        currentIndex++;
        display();
    }

    
}   

function submitQuiz() {
    

    if(userAnswers.length < quizQuestions.length || userAnswers.includes("")) {
        alert("Please finish all questions before submitting 😣");
    }

    let score = userAnswers.filter((answer, index) =>
        answer === quizQuestions[index].correctAnswer
    ).length;

    let scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.innerHTML = `Score: ${score} / ${quizQuestions.length}`;
}

