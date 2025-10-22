
function getRandom() {
    return Math.floor(Math.random() * 90) + 1;
}


function getComputerChoice() {
    let random_choice = getRandom();
    const compchoice = document.querySelector(".computerpic");
    console.log("This funciton is ran")
    if (random_choice >= 1 && random_choice <= 30) {
        compchoice.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/rock.png"
        return ("Rock");
    }
    else if (random_choice >= 31 && random_choice <= 60) {
        compchoice.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png"
        return ("Paper");
    }
    else {
        compchoice.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png"
        return ("Scissors");
    }

}


function getHumanChoice(e) {

    let text = e.target.textContent;
    text = text.toUpperCase();
    const humanpic = document.querySelector(".humanpic");

    if (text == "SCISSORS") {
        humanpic.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png"
        return "Scissors"
    }
    else if (text == "ROCK") {
        humanpic.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/rock.png"
        return "Rock"
    }
    else {
        humanpic.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png"
        return "Paper"
    }

}


function playRound(computerchoice, humanchoice) {

    const winnerannounced = document.querySelector(".winnerannounced");


    if (computerchoice == "Rock" && humanchoice == "Paper" || computerchoice == "Paper" && humanchoice == "Scissors" || computerchoice == "Scissors" && humanchoice == "Rock") {

        winnerannounced.textContent = "HUMAN WINSS!!"
        return ("HUMAN");
    }
    else if (computerchoice == "Paper" && humanchoice == "Rock" || computerchoice == "Scissors" && humanchoice == "Paper" || computerchoice == "Rock" && humanchoice == "Scissors") {
        winnerannounced.textContent = "COMPUTER WINSS!!"
        return ("COMPUTER");
    }
    else {
        winnerannounced.textContent = "DRAW!!";
        return ("DRAW");
    }
}



function uiGame() {
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    const buttons = document.querySelector(".buttons");
    const reset = document.querySelector(".reset");
    const total = document.querySelector(".totalscore");
    let human_score = 0;
    let computer_score = 0;

    rock.classList.add("btn");
    paper.classList.add("btn");
    scissors.classList.add("btn");

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    buttons.addEventListener("click", e => {
        document.querySelector(".winnerannounced").textContent = ""
        const round_score = playRound(getComputerChoice(), getHumanChoice(e));

        if (round_score == "HUMAN") { human_score++; }
        else if (round_score == "COMPUTER") { computer_score++ }
        else { ; }

        total.textContent = ` HUMAN SCORE : ${human_score}   VS  COMPUTER SCORE : ${computer_score}`;

        if (computer_score == 5) {
            total.textContent = "GAME OVERR COMPUTER WINS";
            rock.disabled=true;
            paper.disabled = true;
            scissors.disabled = true;

        }
        else if (human_score == 5) {
            total.textContent = "GAME OVERR HUMAN WINS";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
    )

    reset.addEventListener("click", () => {
        human_score =0;
        computer_score=0;
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        total.textContent = ``;
        
    })
}


uiGame();
