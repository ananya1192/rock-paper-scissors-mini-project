function getComputerChoice()
{
    let num=Math.random()*15;
    if(num>=0&&num<5){
        return "rock";
    }
    else if(num>=5 && num<10)
    {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice()
{
    return prompt("Enter your choice");
}

function playGame()
{
    let humanScore=0;
let computerScore=0;

function playRound()
{
    let humanChoice=getHumanChoice();
   let computerChoice=getComputerChoice();
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice) console.log("Tie");
    else if(
        (humanChoice==="rock"&&computerChoice==="scissors") ||
        (humanChoice==="paper"&&computerChoice==="rock")||
        (humanChoice==="scissors"&&computerChoice==="paper")
    )
    { humanScore++;
        console.log("Congratulations ! You win.");
       
    }
    else { computerScore++;
         console.log("Oh no ! You lost :(");
    }
}
for(let i=0;i<5;i++){
playRound();
}
if(humanScore>computerScore){
    console.log("You won!");
}
else if(computerScore>humanScore)
{
    console.log("You lost");
}
else{
    console.log("Tie");
}
}
playGame();