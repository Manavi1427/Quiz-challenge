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
let ques=document.querySelector("#questions")
let timer1=document.querySelector("#timer")
let name=document.querySelector("#uname")
let startbtn=document.querySelector("#start")
let submitbtn=document.querySelector("#submit-score")
let feedback=document.querySelector("#feedback")

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

function startQuiz(){
    timerId.setInterval(clockTick,1000);
    timer1.textContent=time;
    let landindscreen=document.querySelector("#start-screen");
    landingscreen.setAttribute("class","hide");
    ques.removeAttribute("class");
    getQuesion();
}
function getQuesion(){
    
}