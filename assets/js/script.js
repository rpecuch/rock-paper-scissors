var wins = 0;
var losses = 0;
var ties = 0;

var moveChoices = ["R", "P", "S"];

function playGame () {
    var playerChoice = prompt("Enter R, P, or S to play!");
    playerChoice = playerChoice.toUpperCase();

    var computerChoice = moveChoices[Math.floor(Math.random()* moveChoices.length)];

    if (moveChoices.includes(playerChoice)) {
        alert("You chose " + playerChoice);
        alert("Computer chose " + computerChoice);

        if(playerChoice === computerChoice) {
            alert("Its a tie!");
            ties++;
        } else if ((playerChoice === "R" && computerChoice === "S") || (playerChoice === "S" && computerChoice === "P") || (playerChoice === "P" && computerChoice === "R")) {
            alert("You win!");
            wins++;
        } else {
            alert("You lose!");
            losses++;
        }

        alert("Stats: Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);

        var playAgain = confirm("Play again?");
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else {
        alert("Invalid input")
        playGame()
    }
    return;
}

playGame();