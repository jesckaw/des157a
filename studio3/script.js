(function() {
    "use strict";
    console.log("reading js");

    // show the start screen
    document.getElementById("start-screen").style.display = "block";

    // hide the game and end screens
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "none";

    // Get HTML elements
    const startBtn = document.getElementById("start_btn");
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const rollBtn = document.getElementById("roll_btn");
    const passBtn = document.getElementById("pass_btn");
    const p1Score = document.getElementById("p1_score");
    const p2Score = document.getElementById("p2_score");
    const message = document.getElementById("message");
    const winner = document.getElementById("winner");
    const endScreen = document.getElementById("end-screen");
    const restartBtn = document.getElementById("restart-button");

    // Set up game variables
    let activePlayer, currentScore, scores, gamePlaying;

    // Start the game when the Start Game button is clicked
    startBtn.addEventListener("click", function() {
        gamePlaying = true;
        activePlayer = 0;
        currentScore = 0;
        scores = [0, 0];
        p1Score.textContent = "0";
        p2Score.textContent = "0";
        message.textContent = "Player 1's turn";
        gameScreen.style.display = "block";
        startScreen.style.display = "none";
        endScreen.style.display = "none";

    });

    // Roll the dice when the Roll button is clicked
    rollBtn.addEventListener("click", function() {
        if (gamePlaying) {
            let dice = Math.floor(Math.random() * 6) + 1;
            if (dice === 1) {
                message.textContent = "Player " + (activePlayer + 1) + " rolled a 1. Next player's turn.";
                currentScore = 0;
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                p1Score.textContent = scores[0];
                p2Score.textContent = scores[1];
            } else {
                currentScore += dice;
                message.textContent = "Player " + (activePlayer + 1) + " rolled a " + dice + ". Current score: " + currentScore;
            }
        }
    });

    // Pass the turn when the Pass button is clicked
    passBtn.addEventListener("click", function() {
        if (gamePlaying) {
            scores[activePlayer] += currentScore;
            currentScore = 0;
            p1Score.textContent = scores[0];
            p2Score.textContent = scores[1];
            if (scores[activePlayer] >= 20) {
                message.textContent = "Player " + (activePlayer + 1) + " wins!";
                winner.textContent = "Player " + (activePlayer + 1) + " wins!";
                endScreen.style.display = "block";
                gameScreen.style.display = "none";
                gamePlaying = false;
            } else {
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                message.textContent = "Player " + (activePlayer + 1) + "'s turn";
            }
        }
    });

    // Restart the game when the Restart Game button is clicked
    restartBtn.addEventListener("click", function() {
        endScreen.style.display = "none";
        gameScreen.style.display = "block";
        startBtn.click();
    });




  })();