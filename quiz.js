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
let choices =document.querySelector("#options");
let timer1=document.querySelector("#timer")
let uname=document.querySelector("#uname")
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
    getQuestion();
}

//to get the questions and options 
function getQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let prompt1=document.querySelector("#question-words");
    prompt1.textContent=currentQuestion.prompt;
    choices.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn =document.createElement("button");
            choiceBtn.setAttribute("class","option-btn")
            choiceBtn.setAttribute("value",choice);
            choiceBtn.textContent =i + 1 + ". " + choice;
            choiceBtn.onclick =questionClick;
            choices.appendChild(choiceBtn);
        }
    );
}
function questionClick(){
    if (this.value !==questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timer1.textcontent=time;
        feedback.textcontent=`wrong answer`
        feedback.style.color="red"
    }
    else {
        feedback.textContent ="Correct!";
        feedback.style.color ="green";
    }
    feedback.setAttribute("class","feedback")
    //setTimeout->function is repeated after some delay
    setTimeout(function(){
        feedback.setAttribute("class","feedback hide")
    },2000 )
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd(){
    clearInterval(timerId)
    let endscreen=document.querySelector("#quiz-end")
    endscreen.removeAttribute("class")
    let score=document.querySelector("#score-final")
    score.textContent=time;
    ques.setAttribute("class","hide")

}
function clockTick() {
    time--;
    timer1.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}
function savehighscore(){
    let name1=uname.value.trim()
    if(name1!==""){
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newscore={ "name":name1, "score":time}
        highscores.push(newscore);
        window.localStorage.setItem("highscores",JSON.stringify(highscores));
        alert("Your score has been submitted !");
    }
}
function checkforenter(event){
    if(event.key==="enter"){
        savehighscore()
        alert(
            "Your Score has been Submitted"
        );
    }
}
