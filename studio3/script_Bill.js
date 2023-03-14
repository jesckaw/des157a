(function(){
    'use strict';
    console.log('js running');
    const startPage = document.getElementById('startPage');
    const startGame = document.getElementById('start-btn');
    const gamePlay = document.getElementById('gameplay');
    const endPage = document.getElementById('endPage');


    const game = document.getElementById('game');
    showPopup(game, 6000); // show popup for 6 seconds

    const score = document.getElementById('score');
    // const actionArea = document.getElementById('actions');


    const rollDice = document.getElementById('roll-btn');
    const passDice = document.getElementById('pass-btn');

    const messageOne = document.getElementById("message1");
    const messageTwo = document.getElementById("message2");
    const quitBtn = document.getElementById('quitBtn');
    const tryAgainBtn = document.getElementById('tryAgainBtn');

    function showPopup(element, time) {
        element.classList.add('popup');
        setTimeout(() => {
          element.classList.remove('popup');
        }, time);
    }
      
    const gameData = {
        dice:['dice1.svg','dice2.svg','dice3.svg','dice4.svg','dice5.svg','dice6.svg'],
        chicken: ['chicken1.svg', 'chicken2.svg'],
        egg: 'fried_egg.svg',
        players:['Player 1', 'Player 2'],
        score:[0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd:29
    };

    startGame.addEventListener('click',function(){ //start function
        startPage.className = "hidden";
        startGame.className = "hidden";
        gamePlay.className = "showing";

        gameData.index = Math.round(Math.random());
        // gamePlay.innerHTML += '<button id="quit">Wanna Quit?</button>';

        console.log(gameData.index);
        console.log('set up the turn');
        setUpTurn();
    });


    // checks for when quit button is clicked and restarts the page
    quitBtn.addEventListener("click", function() {
        location.reload();
    });


    tryAgainBtn.addEventListener("click", function() {
        location.reload();
    });


    function setUpTurn(){
        game.innerHTML=`<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        rollDice.innerHTML=`<button class="btn" id="roll">Roll the Dice</button>`;
        document.getElementById('roll').addEventListener('click', function (){
            console.log("roll the dice");
            throwDice();
        })
    };

    function throwDice(){
        // actionArea.innerHTML = "";
        rollDice.innerHTML="";
        passDice.innerHTML="";
        rollDice.innerHTML = `<button class="btn"id="roll">Roll The Dice</button>`
        passDice.innerHTML = `<button class="btn" id="pass">Pass</button>`;

        dice.innerHTML = '';

        gameData.roll1 = Math.floor(Math.random()*6) + 1; //better formula instead of Math.ceil
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        dice.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;


        game.innerHTML=`<p>Roll the Dice for the ${gameData.players[gameData.index]}</p>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum == 2){
            console.log('snake eyes!');
            game.innerHTML += `<p>Oh Snap! Snake Eyes!</p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1)
            showCurrentScore();//show current score
            setTimeout(setUpTurn, 2000);
        } else if(gameData.roll1 == 1 || gameData.roll2 == 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]} </p>`;
            setTimeout(setUpTurn, 2000);
            console.log("wah wah you're turn is over!");
        } else {
            console.log("game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            rollDice.innerHTML = `<button class="btn"id="roll">Roll The Dice</button>`
            passDice.innerHTML = `<button class="btn" id="pass">Pass</button>`;

            // document.getElementById('rollagain').addEventListener('click', function(){
            //     setUpTurn();
            // });

            document.getElementById('roll').addEventListener('click', function (){
                console.log("roll the dice");
                throwDice();
            })

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition(); //check here
        };
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index]>gameData.gameEnd){
            gamePlay.className = "hidden";
            // score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            // actionArea.innerHTML = "";
            rollDice.innerHTML="";
            passDice.innerHTML="";

        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score1.innerHTML = `${gameData.score[0]}`
        score2.innerHTML = `${gameData.score[1]}`
    }


    function checkWinningCondition(){
        if(gameData.score[gameData.index]>gameData.gameEnd){
            gamePlay.className = "hidden";
            endPage.className ="showing";

            if(gameData.index == 0) {
                // score.innerHTML = `<h2>${gameData.players[0]} wins with ${gameData.score[0]} points & became a chicken! ${gameData.players[1]} loses with ${gameData.score[1]} points & became a fried egg!</h2>`;

                //new message blocks

                messageOne.innerHTML =`<h2>${gameData.players[0]} wins with ${gameData.score[0]} points & became a <span style="color: #E18F31;">chicken</span>!</h2>`;
                messageTwo.innerHTML = `<h2>${gameData.players[1]} loses with ${gameData.score[1]} points & became a <span style="color: #E18F31;">fried egg</span>!</h2>`;
            } else {
                // score.innerHTML = `<h2>${gameData.players[1]} wins with ${gameData.score[1]} points & became a chicken! ${gameData.players[0]} loses with ${gameData.score[0]} points & became a fried egg!</h2>`;

                //new message blocks

                messageOne.innerHTML = `<h2>${gameData.players[1]} wins with ${gameData.score[1]} points & became a <span style="color: #E18F31;">chicken</span>!</h2>`;
                messageTwo.innerHTML = `<h2>${gameData.players[0]} loses with ${gameData.score[0]} points & became a <span style="color: #E18F31;">fried egg</span>!</h2>`;

            }
            // actionArea.innerHTML = "";
            rollDice.innerHTML="";
            passDice.innerHTML="";

        } else {
            showCurrentScore();
        }
    }
    

})();