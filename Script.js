
var comp_wins =0;
var player_wins =0;

function playRound( playerSelect){

    if(player_wins >=5) window.alert("YOU WIN THE GAME!");
    if(comp_wins >= 5) window.alert("COMPUTER WINS THE GAME! YOU LOSE!");

    var compSelect = compPlay();

    //console.log(compSelect);

    if(playerSelect == compSelect){
        console.log("you tied");
    }else if( playerSelect == 1 && compSelect == 2){
        console.log("computer wins!");
        comp_wins++;
    }else if( playerSelect == 2 && compSelect == 3){
        console.log("computer wins!");
        comp_wins++;
    }else if(playerSelect == 2 && compSelect ==1){
        console.log("you win!");
        player_wins++;
    }else if( playerSelect ==3 && compSelect ==2){
        console.log("you win!");
        player_wins++;
    }

    document.getElementById("player_wins").innerHTML = "player wins: "+player_wins;
    document.getElementById("comp_wins").innerHTML = "computer wins: "+comp_wins;
    
    event.preventDefault();
}

function compPlay(){
    var selection = Math.random(100);
    if(selection > 66){
        console.log("computer plays rock");
        return 1;
    }else if(selection<33){
        return 2;
    }else{
        return 3;
    }
}



