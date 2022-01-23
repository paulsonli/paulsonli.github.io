let secretNum = Math.floor(Math.random() * 100) + 1; //1 - 100
console.log("this is the secret number ", secretNum);

const score = 10;
let tempScore = score;
let highscore = 0;

const checkButton = document.querySelector('.checkButton');
const resetButton = document.querySelectorAll('.resetButton');
const text = document.querySelector('.infoText');
const inputField = document.querySelector('.guessBox');
const secretNumberIs = document.querySelectorAll('.secretNumberIs');
const playerScore = document.querySelector('.yourScore');
const life = document.querySelector('.life');
const playerHighScore = document.querySelectorAll('.yourHighScore');
const hideMainContainer = document.querySelector('.mainContainer');
const hideLoseContainer = document.querySelector('.loseContainer');
const hideWinContainer = document.querySelector('.winContainer');
const hideTopRow = document.querySelector('.contentTop');

life.textContent = tempScore;

//array for history
let alreadyGuessed = [];

//update scoreboard
function updateScore() {
    for (let i = 0; i < secretNumberIs.length; i++) {
        secretNumberIs[i].textContent = secretNum;
    }
}

updateScore();


hideMainContainer.style.display = "block";
hideLoseContainer.style.display = "none";
hideWinContainer.style.display = "none";

function loseScreen() {
    hideLoseContainer.style.display = "block";
    hideMainContainer.style.display = "none";
    hideWinContainer.style.display = "none";
    hideTopRow.style.opacity = "0";
}

function winScreen() {
    hideWinContainer.style.display = "block";
    hideLoseContainer.style.display = "none";
    hideMainContainer.style.display = "none";
    hideTopRow.style.opacity = "0";
}

function resetScreen() {
    hideMainContainer.style.display = "block";
    hideWinContainer.style.display = "none";
    hideLoseContainer.style.display = "none";
    hideTopRow.style.opacity = "1";

    inputField.value = "";

    // clear history
    const removeList = document.querySelectorAll('li');
    for (var i = 0; li = removeList[i]; i++) {
        li.parentNode.removeChild(li);
    }

    // reset score
    tempScore = score;
    life.textContent = score;

    //reset random number
    secretNum = Math.floor(Math.random() * 101);
    console.log("this is the new secret number ", secretNum);

    //reset text
    text.textContent = "Guess A Number";

    //reset array
    alreadyGuessed = [];
}

function addToHistory(userGuess) {
    const ul = document.getElementById('historyList');
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(userGuess));
    ul.appendChild(li);
}

function changeScore() {
    tempScore--;
    life.textContent = tempScore;
}



function game() {
    let userGuess = inputField.value;
    console.log("this is your guess", userGuess);

    if (isNaN(userGuess)) {
        text.textContent = "Please Enter A Number";
    }
    else if (userGuess > 100 || userGuess < 1) {
        text.textContent = "Please Enter A Number Between 1 and 100";
        return 0;
    }

    // checks if guess is already guessed
    for (let i = 0; i < alreadyGuessed.length; i++) {
        if (userGuess == alreadyGuessed[i]) {
            text.textContent = "You Already Guessed. Try again";
            return 0;
        }
    }

    updateScore();

    if (tempScore == 1) { //lose
        loseScreen();
    }

    if (userGuess == secretNum) { //win
        addToHistory(userGuess);
        winScreen();
        playerScore.textContent = tempScore;

        if (tempScore > highscore) {
            highscore = tempScore;
        }

        for (let i = 0; i < playerHighScore.length; i++) {
            playerHighScore[i].textContent = highscore;
        }
    }
    else if (userGuess > secretNum) {
        text.textContent = "Your Number Is High";
        inputField.value = "";
        addToHistory(userGuess);
        changeScore();
        alreadyGuessed.push(userGuess);
    }
    else if (userGuess < secretNum) {
        text.textContent = "Your Number Is Low";
        inputField.value = "";
        addToHistory(userGuess);
        changeScore();
        alreadyGuessed.push(userGuess);
    }



};

for (let i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener('click', resetScreen);
}

checkButton.addEventListener('click', game);
// resetButton.addEventListener('click', mainScreen);
