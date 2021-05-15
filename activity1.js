var  score=0;
function updatescore() {
    score=score+1;
document.getElementById("score").innerHTML="score="+score;
}
function savescore() {
// help to store local data with help of variable and value
localStorage.setItem("score",score);
}
function nextpage() {
    // using window.location to got to next page

    window.location="activity_2.html";
}