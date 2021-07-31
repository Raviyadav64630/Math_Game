var playing=false;
var score;
var action;
var timeremaining;
document.getElementById("startreset").onclick=function(){
    if(playing==true)
        {
           location.reload(); 
        }
    else{
        score=0;
        playing=true;
        document.getElementById("scorevalue").innerHTML=score;
      show("timeremaining");
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
    }
}
function startCountdown(){
    action=setInterval(function(){
      timeremaining-=1;  
        if(timeremaining==0){
            
            stopCountdown();
            document.getElementById("gameOver").style.display="block";
            document.getElementById("gameOver").innerHTML="<p>Game Over</p>Your score is"+score +".</p>";
            hide("timeremaining");
        }
    },1000);
}
function stopCountdown(){
    clearInterval(action);
}
function hide(ID){
    document.getElementById(Id).style.display="none";
}
function show(ID){
    document.getElementById(Id).style.display="block";
}