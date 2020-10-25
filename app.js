let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${convert(userChoice)}${(smallUser)} Beats ${convert(computerChoice)}${(smallComp)}, You Win!`;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => { userChoice_div.classList.remove("green-glow") }, 300);
}

function loss(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${convert(userChoice)}${(smallUser)} Loses to ${convert(computerChoice)}${(smallComp)}, You Lost`;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => { userChoice_div.classList.remove("red-glow") }, 300);
}

function tie(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convert(userChoice)}${(smallUser)} Ties ${convert(computerChoice)}${(smallComp)}, Its a Draw..`;
    document.getElementById(userChoice).classList.add('grey-glow')
    setTimeout(() => { userChoice_div.classList.remove("grey-glow") }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();