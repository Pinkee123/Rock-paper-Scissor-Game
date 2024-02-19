let userScore=0;
let CompScore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg")
const userscore=document.querySelector("#user-score")
const compscore=document.querySelector("#comp-score");
const genCompChoice=()=>{
    //rock paper scissor
    let opt=["rock","paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx]
}
const drawGame=()=>{
    console.log("GAme is Draw")
    message.innerText="Game was Draw! Play again";
    message.style.backgroundColor="blue"
    message.style.color="brown"
}
const showWinner=(userWin, userChoice, compCoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
    // console.log("You are winner")
    message.innerText=`You Win! Your ${userChoice} beats ${compCoice}`;
    message.style.backgroundColor="green"
    message.style.color="red"
    

    }
    else{
        CompScore++;
        compscore.innerText=CompScore;
        console.log("you lose")
        message.innerText=`You Lose! Your ${compCoice} beats ${userChoice}`;
        message.style.backgroundColor="Red"
        message.style.color="white"
    }
}
const playGame=(userChoice)=>{
    //Generte computer choice->modular way of Programming
     const compCoice=genCompChoice();
     console.log(userChoice);
     console.log(compCoice);
     if(userChoice===compCoice){
        //Draw GAme
        drawGame();
     }
     else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=compCoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //roch, scissor
            userWin=compCoice==="scissor"?false:true;
        }
        else{
            //rock paper
            userWin=compCoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compCoice)
     }

}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
      
        const choiceId=choice.getAttribute("id")
        console.log("choice selected", choiceId);
        playGame(choiceId)
    })
})