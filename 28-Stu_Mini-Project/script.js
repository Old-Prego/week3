
var cont = true;

while(cont){

    var selection = prompt("Rock, paper, or scissors?");

    var botRandomizer = Math.floor(Math.random() * 3);

    selection = selection.toLowerCase();

    var player;

    switch(selection) {
        case "rock":
            player = 0;
            break;
        case "paper":
            player = 1;
            break;
        case "scissors":
            player = 2;
            break;
    }

    var botArray = ["rock","paper","scissors"];

    var botChoice = botArray[botRandomizer];

    var vs = selection + " vs " + botChoice;

    var win = new Array(3);
    var i;

    for (i = 0; i < win.length; i++){
        win[i] = new Array(3);
    }

    win[0][0] = 'draw';
    win[0][1] = 'lose';
    win[0][2] = 'win';
    win[1][0] = 'win';
    win[1][1] = 'draw';
    win[1][2] = 'lose';
    win[2][0] = 'lose';
    win[2][1] = 'win';
    win[2][2] = 'draw';

    var result = win[player][botRandomizer];

    switch(result){
        case "win":
            window.alert(vs + " You won!");
            break;
        case "lose":
            window.alert(vs + " You lost!");
            break;
        case "draw":
            window.alert(vs + " It's a draw!");
            break;
    }

    if(window.confirm("Would you like to play again?")){
        cont = true;
    } else {
        cont = false;
    }
}