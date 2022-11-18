const getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3)
    if(x===0){
        return "Rock";
    }
    else if (x===1) {
        return "Paper";
    }
    else if (x===2) {
        return "Scissors";
    }
}




const playRound = (choice1, choice2) => {
    const whoBeatsWho = {
        'rock': 0,
        'scissors': 1,
        'paper': 2
    }
    let myChoice = choice1.toLowerCase();
    let yourChoice = choice2.toLowerCase();
    let me = whoBeatsWho[myChoice];
    let you = whoBeatsWho[yourChoice];
    if (me === you) {
        return `It's a tie!`;
    } 
    else if (me === 0 && you === 1){
        return `You win! ${myChoice} beats ${yourChoice}`;
    }
    else if (me === 0 && you === 2){
        return `You lose! ${yourChoice} beats ${myChoice}`;
    }
    else if (me === 1 && you === 0){
        return `You lose! ${yourChoice} beats ${myChoice}`;
    }
    else if (me === 1 && you === 2){
        return `You win! ${myChoice} beats ${yourChoice}`;
    }
    else if  (me === 2 && you === 0){
        return `You win! ${myChoice} beats ${yourChoice}`;
    }
    else if (me === 2 && you === 1){
        return `You lose! ${yourChoice} beats ${myChoice}`;
    }
}


const ref = string => {
    if (string.includes('tie')){
        return 'tie';
    }
    else if (string.includes('win')){
        return 'win';
    }
    else if (string.includes('lose')){
        return 'lose';
    }
}

const game = () => {

    
let myPoints = 0;
let yourPoints = 0;

for (let i = 0; i < 5; i++){
// let rapidfire = prompt(`Choice ${i + 1} out of 5`)
const computerSelection = getComputerChoice();
console.log(computerSelection);
let round = playRound(rapidfire, computerSelection);
    
    
    if (ref(round) === 'win'){
        myPoints++;
    }
    else if (ref(round) === 'lose'){
        yourPoints++;
    }
}
if (yourPoints > myPoints) {
    return `Computer wins! ${yourPoints} to ${myPoints}!`
}
else if (myPoints > yourPoints){
    return `You win! ${myPoints} to ${yourPoints}!`;
} 
else if (myPoints === yourPoints){
    return `Nobody wins! ${yourPoints} to ${myPoints}! How lame.`
}
}

console.log(game());
