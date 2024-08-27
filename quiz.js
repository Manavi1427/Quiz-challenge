let sp=document.getElementById('form1')
let rp=document.getElementById('rules-panelbar')
function signup(){
    sp.style.display="block"
    rp.style.display="none"
}
let questions=[
    {
        prompt:"What is a data structure?",
        options:["A programming language", 
            "collection of algorithms",
            "A way to store and organize data",
            "A type of computer hardware"],
        answer:"A way to store and organize data"
    },
    {
        prompt: `How do you call a function named myFunction?`,
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction",
        ],
        answer: "myFunction()",
    },
    {
        prompt: `Inside which HTML element do we put the JavaScript?`,
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<scripting>",
        ],
        answer: "<script>",
    },
    {
        prompt: `In JavaScript, which of the following is a logical operator?`,
        options: ["|", "&&", "%", "/"],
        answer: "&&",
    },
    {
        prompt: `A named element in a JavaScript program that is used to store and retrieve data is a _____.`,
        options: [
            "method",
            "assignment operator",
            "letiable",
            "string",
        ],
        answer: "letiable",
    },
];

function clockTick() {
    time--;
    timerEl.textContent = time;
}

let ques=document.querySelector("#questions")
let choices =document.querySelector("#options");
let timer1=document.querySelector("#timer")
let name=document.querySelector("#uname")
let startbtn=document.querySelector("#start")
let submitbtn=document.querySelector("#submit-score")
let feedback=document.querySelector("#feedback")

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

//to start the quiz and hide the main page
function startQuiz(){
    timerId=setInterval(clockTick,1000);
    timer1.textContent=time;
    let landingscreen=document.querySelector("#start-screen");
    landingscreen.setAttribute("class","hide");
    ques.removeAttribute("class");
    getQuesion();
}

//to get the questions and options 
function getQuesion(){
    let currentQuestion=questions[currentQuestionIndex];
    let prompt1=document.querySelector("#question-words");
    prompt1.textcontent=currentQuestion.prompt;
    choices.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn =document.createElement("button");
            choiceBtn.setAttribute("value",choice);
            choiceBtn.textContent =i + 1 + ". " + choice;
            choiceBtn.onclick =questionClick;
            choices.appendChild(choiceBtn);
        }
    );
}
function questionClick(){
    let a=1;
}
startbtn.onclick=startQuiz();