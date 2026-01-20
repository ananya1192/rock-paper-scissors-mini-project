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

let humanScore=0;
let computerScore=0;

function playRound(humanChoice)
{
   const computerChoice=getComputerChoice();
    if(humanChoice===computerChoice) return "Tie";
    if(
        (humanChoice==="rock"&&computerChoice==="scissors") ||
        (humanChoice==="paper"&&computerChoice==="rock")||
        (humanChoice==="scissors"&&computerChoice==="paper")
    )
    { humanScore++;
        return "Congratulations ! You win this round.";
       
    }
    else { computerScore++;
         return "Oh no ! You lost this round :(";
    }
}
const buttons=document.querySelectorAll("button");
const resultDiv=document.querySelector("#result");
const scoreDiv=document.querySelector("#score");

buttons.forEach((button)=>
{
    button.addEventListener("click",()=>{
        if(humanScore==5||computerScore==5) return;
        const humanChoice=button.dataset.choice;
        const result=playRound(humanChoice);
        resultDiv.textContent=result;
        scoreDiv.textContent=`You : ${humanScore}| Computer : ${computerScore}`;
        if(humanScore===5)
        {
            resultDiv.textContent="You won the game !";
        }
        else if(computerScore===5){
            resultDiv.textContent="You lost the game !";
        }
    });
});
