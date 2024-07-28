let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelectorAll("#rstbtn");
let newGameBtn =document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let coun =0;
 const winPatterns = [
    [0,1,2 ],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];
 const resetGame = () => {
    turnO = true;
    
    enableBoxes();
    msgContainer.classList.add("hide");
      };
 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled =true;
        
         checkWinner();
 });
 });
    const disableBoxes = () => {
        for(let box of boxes) {
            box.disabled =true;
        }
    };
    const enableBoxes = () => {
        for(let box of boxes) {
            box.disabled =false;
            box.innerText ="";
        }
    };;
    const showWinner =(winner) => {
msg.innerText =`Congrats, winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
    };

 const checkWinner = () => {
    for( let pattern of winPatterns) {
            
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val !="" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner!");
            showWinner(pos1Val);
        }
    }
    }
  };
  newGameBtn.addEventListener("click",resetGame);
  rstBtn.addEventListener("click",resetGame);

  