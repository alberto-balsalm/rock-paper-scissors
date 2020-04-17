let playerScore = computerScore = 0;
let playerSelection = "";
const playerImages = document.querySelectorAll('.playerImg');
const playerScoreLabel = document.querySelector('.playerScore');
const computerScoreLabel = document.querySelector('.computerScore');
const theWinnerIs = document.querySelector('.result p');
const newGameButton = document.querySelector('button');
newGameButton.style.display = "none";

buttonSelectionPlayer();

function buttonSelectionPlayer() {
    playerImages.forEach(img => img.addEventListener('click', setWeaponPlayer))
}
    
function setWeaponPlayer(img) {
    const selection = document.querySelector(".selectedPlayer");
    //displaying chosen weapon
    if(img.target.alt === "Player's rock") {
        playerSelection = "rock";
        selection.src = "img/rock-l.png";
    } else if(img.target.alt === "Player's paper") {
        playerSelection = "paper";
        selection.src = "img/paper-l.png";
    } else {
        playerSelection = "scissors";
        selection.src = "img/scissors-l.png";
    }
    console.log("func: " + playerSelection)
    playRound(); //after selecting a weapon, the round begins  
}

function playRound() {
    const computerSelection = computerPlay();
    const result = returnRoundWinner(playerSelection, computerSelection);
        
    showResultSign(result);

    if(playerScore === 5 || computerScore === 5) resetGame();
    

    playerScoreLabel.textContent = `Your score: ${playerScore}`;
    computerScoreLabel.textContent = `Computer score: ${computerScore}`;       

}

function resetGame() {
    //deactivate images with weapons
    playerImages.forEach(img => img.removeEventListener('click', setWeaponPlayer));

    if(playerScore === 5) theWinnerIs.innerText = 
            "You won! \n\n Would you like to play another game?";
    else theWinnerIs.innerText = "You lost! \n\n Would you like to\ntry again?";
    newGameButton.style.display = "block";
    newGameButton.onclick = function() {
        theWinnerIs.innerText = "";
        playerScoreLabel.textContent = "";
        computerScoreLabel.textContent = "";
        playerScore = computerScore = 0;
        newGameButton.style.display = "none";
        buttonSelectionPlayer();
    }
}

function showResultSign(result) {
    const resultSign = document.querySelector(".resultImage");
    if(result === "player") {
        resultSign.src = "img/greater-than.png";
        playerScore++;
    } else if(result === "computer") {
        resultSign.src = "img/less-than.png";
        computerScore++;
    } else {
        resultSign.src = "img/equals.png";
    }
}

function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    const selection = document.querySelector(".selectedComputer"); 

    //displaying computer's choice through an image
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

function returnRoundWinner(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return "player"
        } else if(computerSelection === "paper") {
            return "computer"
        } else {
            return "draw"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "player"
        } else if(computerSelection === "scissors") {
            return "computer"
        } else {
            return "draw"
        }
    } else { //scissors
         if(computerSelection === "paper") {
             return "player"
         } else if (computerSelection === "rock") {
             return "computer"
         } else {
             return "draw"
         }
    }
}

