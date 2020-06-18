const choices = document.querySelector('.choice');
const score = document.querySelector('score');
const result = document.querySelector('result');
const restart = documemt.querySelector('restart');
const model = document.querySelector('.model');

const scoreboard = {
    player:0,
    computer:0
};
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
}
function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67){
        return 'paper';
    } else {
        return 'scissor';
    }
}
