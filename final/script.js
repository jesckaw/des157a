(function(){
    'use strict';
    alert("Hello! Welcome to the Game of Chicken. You can start as player one or two. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a one. If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again or if the current player feels that luck is running thin, they can pass to the other player. The first player to get 30 points or higher wins. FYI if you roll two ones your score gets reset!")
    console.log('js running');

    const startPage = document.getElementById('startPage');
    const startGame = document.getElementById('start-btn');
    const gamePlay = document.getElementById('gameplay');
    const endPage = document.getElementById('endPage');
    const startButton1 = document.getElementById('start-btn');
    const startButton2 = document.getElementById('start2-btn');
    var click = 0;

    //creating the popup function variables
    const game = document.getElementById('game');
    showPopup(game, 3000); // show popup for 6 seconds

    const score = document.getElementById('score');
    const rollDice = document.getElementById('roll-btn');
    const passDice = document.getElementById('pass-btn');

    const messageOne = document.getElementById("message1");
    const messageTwo = document.getElementById("message2");
    const quitBtn = document.getElementById('quitBtn');
    const tryAgainBtn = document.getElementById('tryAgainBtn');

    const bgm = new Audio('audio/bgm.mp3');
    const success = new Audio('audio/success.mp3');
    const fail = new Audio('audio/fail.mp3');
    const diceSound = new Audio('audio/dice.mp3');
    const pass = new Audio('audio/pass.mp3');



    startButton1.addEventListener('click', function(){
        click = 0;
         bgm.play();

        startPage.className = "hidden";
        startGame.className = "hidden";
        gamePlay.className = "showing";
        console.log(click);
        gameData.index = click;

        console.log(gameData.index);
        console.log('set up the turn');
        setUpTurn();

    })

    startButton2.addEventListener('click', function(){
        console.log("P2");
        click = 1;
         bgm.play();

        startPage.className = "hidden";
        startGame.className = "hidden";
        gamePlay.className = "showing";
        console.log(click);
        gameData.index = click;


        console.log(gameData.index);
        console.log('set up the turn');
        setUpTurn();

    })


    function showPopup(element, time) {
        element.className = 'showing';
        console.log("popping Up");
        element.classList.add('gamepopup');
        setTimeout(() => {
            
            element.classList.remove('gamepopup');
            element.className = 'hidden';
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
        gameEnd:30
    };


    // checks for when quit button is clicked and reloads to start screen
    quitBtn.addEventListener("click", function() {
        location.reload();
    });

    tryAgainBtn.addEventListener("click", function() {
        location.reload();
    });


    // //checks for when try again button is clicked and restarts game
    // tryAgainBtn.addEventListener("click", function() {
    //     gameData.score = [0,0];
    //     gameData.index = 0;
    //     setUpTurn();
    // });
    


    passDice.addEventListener('click', function(){
        console.log('pass button pressed');
        game.innerHTML=`<p>Passing to ${gameData.players[gameData.index]}</p>`;
        pass.play();
    });
    


    function setUpTurn(){
        game.innerHTML=`<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        showPopup(game,3000);
        rollDice.innerHTML=`<button class="btn" id="roll">Roll</button>`;
        document.getElementById('roll').addEventListener('click', function (){
            console.log("roll the dice");
            diceSound.play();
            throwDice();
        })
    };

    function throwDice(){
        rollDice.innerHTML="";
        passDice.innerHTML="";
        rollDice.innerHTML = `<button class="btn"id="roll">Roll</button>`;
        console.log("pressing roll");
        passDice.innerHTML = `<button class="btn" id="pass">Pass</button>`;

        dice.innerHTML = '';

        gameData.roll1 = Math.floor(Math.random()*6) + 1; //better formula instead of Math.ceil
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        dice.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;


        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum == 2){
            console.log('snake eyes!');
            game.innerHTML = `<p>Oh Snap! Snake Eyes!</p>`;
            fail.play();
            showPopup(game,3000);
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1)
            showCurrentScore();//show current score
            setTimeout(setUpTurn, 3000);
        } else if(gameData.roll1 == 1 || gameData.roll2 == 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML = `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]} </p>`;
            fail.play();
            showPopup(game,3000);
            setTimeout(setUpTurn, 6000);
            console.log("wah wah you're turn is over!");
        } else {
            console.log("game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            rollDice.innerHTML = `<button class="btn"id="roll">Roll</button>`;
            console.log("pressing roll");
            passDice.innerHTML = `<button class="btn" id="pass">Pass</button>`;


            document.getElementById('roll').addEventListener('click', function (){
                console.log("roll the dice");
                diceSound.play();
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

                messageOne.innerHTML =`<h2>${gameData.players[0]} wins with <span style="color: #E18F31;">${gameData.score[0]}</span> points & became a <span style="color: #E18F31;">chicken</span>!</h2> <img src="images/${gameData.chicken[0]}">`;
                messageTwo.innerHTML = `<h2>${gameData.players[1]} loses with <span style="color: #E18F31;">${gameData.score[1]}</span>  points & became a <span style="color: #E18F31;">fried egg</span>!</h2> <img src="images/${gameData.egg}">`;
                success.play();
            } else {

                messageOne.innerHTML = `<h2>${gameData.players[0]} loses with <span style="color: #E18F31;">${gameData.score[0]}</span> points & became a <span style="color: #E18F31;">fried egg</span>!</h2><img src="images/${gameData.egg}">`;
                messageTwo.innerHTML = `<h2>${gameData.players[1]} wins with <span style="color: #E18F31;">${gameData.score[1]}</span> points & became a <span style="color: #E18F31;">chicken</span>!</h2><img src="images/${gameData.chicken[1]}">`;
                success.play();

            }
            rollDice.innerHTML="";
            passDice.innerHTML="";

        } else {
            showCurrentScore();
        }
    }
    

})();