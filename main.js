const playerImages = document.querySelectorAll('.playerImg');


playerImages.forEach(img => img.addEventListener('click', () => {
    const selection = document.querySelector(".selectedPlayer");
    let playerSelection;
    if(img.alt === "Player's rock") {
        playerSelection = "rock";
        selection.src = "img/rock-l.png";
    } else if(img.alt === "Player's paper") {
        playerSelection = "paper";
        selection.src = "img/paper-l.png";
    } else {
        playerSelection = "scissors";
        selection.src = "img/scissors-l.png";
    }

    

}));


function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    const selection = document.querySelector(".selectedComputer"); 

    if(number === 0) {
        selection.src = "img/rock-r.png";
        return "rock";
    } else if(number === 1) {
        selection.src = "img/paper-r.png";
        return "paper";
    } else {
        selection.src = "img/scissors-r.png";
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            console.log("You win!");
        } else if(computerSelection === "paper") {
            console.log("You lose!")
        } else {
            console.log("It's a draw!")
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            console.log("You Win!");
        } else if(computerSelection === "scissors") {
            console.log("You lose!");
        } else {
            console.log("It's a draw")
        }
    } else { //scissors
         if(computerSelection === "paper") {
             console.log("You win!");
         } else if (computerSelection === "rock") {
             console.log("You lose!");
         } else {
             console.log("It's a draw")
         }
    }
}

playRound(playerSelection, computerPlay())