let submitBtn = document.querySelector("#submit-btn");
let gameContainer = document.querySelector(".game-container");
let formContainer = document.querySelector(".form-container");
let player1 = document.getElementById("player1").value;
let player2 = document.getElementById("player2").value;
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//Form
const myForm = ()=>{
    //console.log(player1);
    gameContainer.classList.remove("hide");
    formContainer.classList.add("hide");
}

//Game
newGameBtn.addEventListener("click",()=>{
    newGame();
    resetBtn.classList.remove("hide");
});

const newGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click",()=>{
    resetGame();
})

const resetGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    if(winner == 'O'){
        console.log(player1);
        msg.innerText = `Congartulations, Winner is ${player1}` ;
    }
    else {
        console.log(player2);
        msg.innerText = `Congartulations, Winner is ${player2}` ;
    }
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableBox();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" & posVal2 != "" & posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3)
            {
                //console.log(posVal1);
                showWinner(posVal1);
            }
        }
    }
}