document.addEventListener("DOMContentLoaded", function () {
    const openRulesButton = document.getElementById("openRules");
    const closeButton = document.querySelector(".closeButton");
    const gameRules = document.getElementById("gameRules");
    const playerChoicesDiv = document.querySelector(".player-choices");
    const playerScoreDisplay = document.getElementById("yScore");
    const computerScoreDisplay = document.getElementById("comScore");
    const tieRockDiv = document.querySelector(".tieRock");
    const tieScissorDiv = document.querySelector(".tieScissor");
    const tiePaperDiv = document.querySelector(".tiePaper");
    const pcWins1 = document.querySelector(".pcWins1");
    const pcWins2 = document.querySelector(".pcWins2");
    const pcWins3 = document.querySelector(".pcWins3");
    const replayButtons = document.querySelectorAll(".replay");
    const youWin1 = document.querySelector(".youWin1");
    const youWin2 = document.querySelector(".youWin2");
    const youWin3 = document.querySelector(".youWin3");

    let playerScore = 0;
    let computerScore = 0;

    openRulesButton.addEventListener("click", function() {
        gameRules.classList.toggle("show");
    });

    closeButton.addEventListener("click", function() {
        gameRules.classList.remove("show");
    });
    const nextButton = document.querySelector('.youWin1 .next');

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            window.location.href = 'win.html';
        });
    }

    const playerChoices = document.querySelectorAll(".player-choice");
    playerChoices.forEach(choice => {
        choice.addEventListener("click", function () {
            const playerChoice = choice.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            const winner = determineWinner(playerChoice, computerChoice);

            updateScoreDisplay(winner);
            updateResultsDisplay(playerChoice, computerChoice, winner);
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "tie";
        } else if (
            (playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "scissors" && computerChoice === "rock") ||
            (playerChoice === "paper" && computerChoice === "scissors")
        ) {
            return "computer";
        } else {
            return "player";
        }
    }

    function updateScoreDisplay(winner) {
        if (winner === "player") {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (winner === "computer") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }

    const resultsDiv = document.getElementById("results");

    function updateResultsDisplay(playerChoice, computerChoice, winner) {
        playerChoicesDiv.style.display = "none";
        tieRockDiv.style.display = "none";
        tieScissorDiv.style.display = "none";
        tiePaperDiv.style.display = "none";
        pcWins1.style.display = "none";
        pcWins2.style.display = "none";
        pcWins3.style.display = "none";

        if (winner === "tie") {
            if (playerChoice === "rock") {
                tieRockDiv.style.display = "flex";
            } else if (playerChoice === "scissors") {
                tieScissorDiv.style.display = "flex";
            } else if (playerChoice === "paper") {
                tiePaperDiv.style.display = "flex";
            }
        } else if (winner === "player") {
            showYouWinSection(playerChoice,computerChoice);
        } else if (winner === "computer") {
            showComputerWinSection(playerChoice, computerChoice);
        }
    }

    function showComputerWinSection(playerChoice, computerChoice) {
        playerChoicesDiv.style.display = "none";
        tieRockDiv.style.display = "none";
        tieScissorDiv.style.display = "none";
        tiePaperDiv.style.display = "none";

        if (playerChoice === "rock" && computerChoice === "paper") {
            pcWins1.style.display = "flex";
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            pcWins2.style.display = "flex";
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            pcWins3.style.display = "flex";
        }
    }
    function showYouWinSection(playerChoice, computerChoice) {
        playerChoicesDiv.style.display = "none";
        tieRockDiv.style.display = "none";
        tieScissorDiv.style.display = "none";
        tiePaperDiv.style.display = "none";

        if (playerChoice === "rock" && computerChoice === "scissors") {
            youWin1.style.display = "flex";
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            youWin2.style.display = "flex";
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            youWin3.style.display = "flex";
        }
        if (youWin1.style.display === "flex" || youWin2.style.display === "flex" || youWin3.style.display === "flex") {
            openRulesButton.classList.add("rules-shifted");
        } else {
            openRulesButton.classList.remove("rules-shifted");
        }
    }

    replayButtons.forEach(button => {
        button.addEventListener("click", function () {
            playerChoicesDiv.style.display = "flex";
            tieRockDiv.style.display = "none";
            tieScissorDiv.style.display = "none";
            tiePaperDiv.style.display = "none";
            pcWins1.style.display = "none";
            pcWins2.style.display = "none";
            pcWins3.style.display = "none";
            youWin1.style.display="none";
            youWin2.style.display="none";
            youWin3.style.display="none";
            openRulesButton.classList.remove("rules-shifted");
            window.location.href = "index.html";
        });
    });
});
