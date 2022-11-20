
const playRound = choice => {
    const whoBeatsWho = {
        'rock': 0,
        'scissors': 1,
        'paper': 2
    }

    const getComputerChoice = () => {
        let x = Math.floor(Math.random() * 3)
        if(x===0){
            return "rock";
        }
        else if (x===1) {
            return "paper";
        }
        else if (x===2) {
            return "scissors";
        }
    }

    let myChoice = choice;
    let yourChoice = getComputerChoice();

    console.log(myChoice, yourChoice);
    let me = whoBeatsWho[choice];
    let you = whoBeatsWho[yourChoice];

    if (me === you) {
        return `It's a tie! Go again.`;
    } 
    else if (me === 0 && you === 1){
        return `Your point! ${myChoice} beats ${yourChoice}`;
    }
    else if (me === 0 && you === 2){
        return `Sorry! ${yourChoice} beats ${myChoice}`;
    }
    else if (me === 1 && you === 0){
        return `Sorry! ${yourChoice} beats ${myChoice}`;
    }
    else if (me === 1 && you === 2){
        return `Your point! ${myChoice} beats ${yourChoice}`;
    }
    else if  (me === 2 && you === 0){
        return `Your point! ${myChoice} beats ${yourChoice}`;
    }
    else if (me === 2 && you === 1){
        return `Sorry! ${yourChoice} beats ${myChoice}`;
    }
}


const ref = string => {
    if (string.includes('tie')){
        return 'tie';
    }
    else if (string.includes('point')){
        return 'win';
    }
    else if (string.includes('Sorry')){
        return 'lose';
    }
}

let yourScore = 1;
let computerScore = 1;

const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    e.target.classList.add('pushed');
    const messageDiv = document.querySelector('.results');

        if(document.querySelector('.results>p')){
        messageDiv.removeChild(document.querySelector('.results>p'));
        };

    const message = document.createElement('p');
    message.textContent = playRound('rock');

    if (ref(message.textContent) === 'win'){
        let yourPoints = document.querySelector('.points-left');

        yourPoints.textContent = '0' + `${yourScore}`;
        yourScore++;
        if(yourScore === 6){
        message.textContent = 'You win the game!'
        }

    }      
    if (ref(message.textContent) === 'lose'){
        let compPoints = document.querySelector('.points-right');

        compPoints.textContent = '0' + `${computerScore}`;
        computerScore++;

        if(computerScore === 6){
        message.textContent = 'The computer wins! Cry about it.';
        }
    }


messageDiv.appendChild(message);

    }

);

const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    e.target.classList.add('pushed');
    const messageDiv = document.querySelector('.results');

        if(document.querySelector('.results>p')){
        messageDiv.removeChild(document.querySelector('.results>p'));
        };

    const message = document.createElement('p');
    message.textContent = playRound('paper');

    if (ref(message.textContent) === 'win'){
        let yourPoints = document.querySelector('.points-left');

        yourPoints.textContent = '0' + `${yourScore}`;
        yourScore++;
        if(yourScore === 6){
        message.textContent = 'You win the game!'
        }

    }      
    if (ref(message.textContent) === 'lose'){
        let compPoints = document.querySelector('.points-right');

        compPoints.textContent = '0' + `${computerScore}`;
        computerScore++;

        if(computerScore === 6){
        message.textContent = 'The computer wins! Cry about it.';
        }
    }


messageDiv.appendChild(message);

    }

);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => {
    e.target.classList.add('pushed');
    const messageDiv = document.querySelector('.results');

        if(document.querySelector('.results>p')){
        messageDiv.removeChild(document.querySelector('.results>p'));
        };

    const message = document.createElement('p');
    message.textContent = playRound('scissors');

    if (ref(message.textContent) === 'win'){
        let yourPoints = document.querySelector('.points-left');

        yourPoints.textContent = '0' + `${yourScore}`;
        yourScore++;
        if(yourScore === 6){
        message.textContent = 'You win the game!'


        }

    }      
    if (ref(message.textContent) === 'lose'){
        let compPoints = document.querySelector('.points-right');

        compPoints.textContent = '0' + `${computerScore}`;
        computerScore++;

        if(computerScore === 6){
        message.textContent = 'The computer wins! Cry about it.';
        }
    }


messageDiv.appendChild(message);

    }

);


const endTransition = e => {
    if (e.propertyName !== 'transform'){
        return;
    }
    selectRock.classList.remove('pushed');
}

const selectRock = document.querySelector('button#rock');
selectRock.addEventListener('transitionend', endTransition);


const endPaperTransition = e => {
    if (e.propertyName !== 'transform'){
        return;
    }
    selectPaper.classList.remove('pushed');
}

const selectPaper = document.querySelector('button#paper');
selectPaper.addEventListener('transitionend', endPaperTransition);


const endScisTransition = e => {
    if (e.propertyName !== 'transform'){
        return;
    }
    selectScis.classList.remove('pushed');
}

const selectScis = document.querySelector('button#scissors');
selectScis.addEventListener('transitionend', endScisTransition);

