


function getRandom() {
    return Math.floor(Math.random() * 90) + 1;
}


function getComputerChoice() {
    random_choice = getRandom();

    if (random_choice >= 1 && random_choice <= 30) {
        return ("Rock");
    }
    else if (random_choice >= 31 && random_choice <= 60) {
        return ("Paper");
    }
    else {
        return ("Scissors")
    }
}


function getHumanChoice(e) {

    let text = e.target.textContent;
    text = text.toUpperCase();

    if (text === "SCISSORS") {
        return "Scissors"
    }
    else if (text === "ROCK") {
        return "Rock"
    }
    else {
        return "Paper"
    }

}




function playRound(computerchoice,humanchoice) {
    let human_score=0;
    let computer_score=0;

    if (computerchoice == "Rock" && humanchoice == "Paper" || computerchoice == "Paper" && humanchoice == "Scissors" || computerchoice == "Scissors" && humanchoice == "Rock") {
        console.log("Human Wins!!");
        human_score++;
    }
    else if (computerchoice == "Paper" && humanchoice == "Rock" || computerchoice == "Scissors" && humanchoice == "Paper" || computerchoice == "Rock" && humanchoice == "Scissors") {
        console.log("Computer Wins!!");
        computer_score++;
    }
    else {
        console.log("Its a Draw :))");
    }
}



function uiGame() {
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    const buttons = document.querySelector(".buttons");


    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    buttons.addEventListener("click", e=> {
        playRound(getComputerChoice(), getComputerChoice(e))
        }
    )
}


uiGame();
