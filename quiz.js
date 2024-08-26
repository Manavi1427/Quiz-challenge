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