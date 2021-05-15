function adduser() {
    var player1=document.getElementById("player1_name_input").value;
    var player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1name",player1);
    localStorage.setItem("player2name",player2);
    window.location="game_page.html";
    
    }