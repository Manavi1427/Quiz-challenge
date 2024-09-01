let scoresbtn=document.querySelector("#view-high-scores")
function printhighscore(){
    let highscores=JSON.parse(window.localStorage.getItem("highscores"))|| [];
    highscores.sort(function(a,b){
        return a.score-b.score
    });
    highscore.forEach(function(score){
        let liEl=document.createElement("li")
        liEl.textContent=score.name + "  " + score.score
        let olEl=document.getElementById("highscores")
        olEl.appendChild(liEl)
    });
printhighscore()
}
