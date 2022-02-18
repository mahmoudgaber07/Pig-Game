'use strict';
//selecting elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let cur0El = document.getElementById('current--0');
let cur1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let rollBTN = document.querySelector('.btn--roll');
let holdBTN = document.querySelector('.btn--hold');
let newGameBTN = document.querySelector('.btn--new');

let currScore, activePlayer, finalScores, playing;
const inti = () => {
    currScore = 0;
    activePlayer = 0;
    finalScores = [0, 0];
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    cur0El.textContent = 0;
    cur1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
inti();
//switch player
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
//roll dice 
rollBTN.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `./assets/img/dice-${dice}.png`;
        if (dice !== 1) {
            currScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        } else {
            switchPlayer();
        }
    }
});

//hold dice 
holdBTN.addEventListener('click', function () {
    if (playing) {
        finalScores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];
        if (finalScores[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        switchPlayer();
    }
})

//new Game
newGameBTN.addEventListener('click', inti);