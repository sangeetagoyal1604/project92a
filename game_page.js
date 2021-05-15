var player1name=localStorage.getItem("player1name");
var player2name=localStorage.getItem("player2name");
var player1score=0;
var player2score=0;
document.getElementById("player1name").innerHTML=player1name+"=";
document.getElementById("player2name").innerHTML=player2name+"=";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerque").innerHTML="question turn="+player1name;
document.getElementById("playerans").innerHTML="answer turn="+player2name;




function send() {
 var number1=document.getElementById("number1").value;
 var number2=document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);


question_number="<h4>" + number1 +" X " +number2 +"</h4>";
input_box ="<br>Answer :<input type='text' id='input_check_box'>";
check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row =question_number +input_box +check_button;
document.getElementById("output").innerHTML=row;

document.getElementById("number1").value ="";
document.getElementById("number2").value ="";}
question_turn="player1";
answer_turn="player2";

function check() {
    var answer=document.getElementById('input_check_box').value;
    if (answer==actual_answer) {
         if (answer_turn=="player1") {
       
    player1score=player1score+1;
    document.getElementById("player1score").innerHTML=player1score;   
    }
    else{
   player2score=player2score+1;
   document.getElementById("player2score").innerHTML=player2score;  
    }
    }
    if (answer_turn=="player1") {
      answer_turn="player2";
      document.getElementById("playerans").innerHTML="answer Turn=" +player2name;  
    } else {
     answer_turn="player1";
     document.getElementById("playerans").innerHTML="answer Turn=" +player1name;  
    }
     if (question_turn=="player1") {
     question_turn="player2" 
document.getElementById("playerque").innerHTML="question Turn =" +player2name;
 } 
  else{
      question_turn="player1"
      document.getElementById("playerque").innerHTML="question Turn = "+player1name; 
  } 
}
