


function getRandom(){
    return Math.floor(Math.random()*90)+1;
}


function getComputerChoice(){
    random_choice = getRandom();

    if( random_choice >= 1 && random_choice <= 30){
        return ("Rock");
    }
    else if (random_choice >= 31 && random_choice <= 60){
        return ("Paper");
    }
    else{
        return ("Scissors")
    }
}


function getHumanChoice(){

    let a = prompt("Enter your Input.");
    a = a.toUpperCase();

    if( a === "SCISSORS"){
        return "Scissors"
    }
    else if ( a === "ROCK"){
        return "Rock"
    }
    else {
        return "Paper"
    }
    
}


function playGame(){
    let computer_score = 0;
    let human_score = 0 ;

    function playRound(computerchoice,humanchoice){

    if(computerchoice == "Rock" && humanchoice == "Paper" || computerchoice == "Paper" && humanchoice == "Scissors" || computerchoice == "Scissors" && humanchoice == "Rock"){
        console.log("Human Wins!!");
        human_score++;
    }
    else if ( computerchoice == "Paper" && humanchoice == "Rock"|| computerchoice == "Scissors" && humanchoice == "Paper" || computerchoice == "Rock" && humanchoice == "Scissors"){
        console.log("Computer Wins!!");
        computer_score++;
    }
    else{
        console.log("Its a Draw :))");
    }
}

    for (i=0; i < 5; i ++){
        playRound(getComputerChoice(),getHumanChoice());
    }

    console.log(`The total number of wins after 5 rounds are Human: ${human_score} and Computer: ${computer_score}`)
}

playGame();