// Homework for Tic Tac Toe
// 1. Ask user before starting the game if he/she wants X or 0
// 2. Instead of moving cpu randomly try to implement a logic

const userChoice = "X";
const cpuChoice = "0";
let count = 0;
let buttons;

let winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

function gameBoard() {
    let table = document.querySelector("#table");
    let index = 0;
    for(let i = 0; i < 3; i++) {
        let tr = table.insertRow();
        for(let j = 0; j < 3; j++) {
            let td = tr.insertCell();
            // dynamic way to create HTML elements using JS
            let button = document.createElement("button");
            // how to add class on HTML tag using JS
            button.className = "btn";
            button.setAttribute("title", index);
            td.appendChild(button);
            button.addEventListener("click", showUserChoice);
            index++;
        }
    }
}

function showUserChoice() {
    // this - the button on which you have clicked
    // 'this' is a reserved keyword
    // 'this' points to the current button that you have clicked
    this.innerHTML = userChoice;
    let index = this.title;
    this.setAttribute("disabled",true);
    count++;
    checkWinner(index, userChoice);
    showCpuChoice();
}

function showCpuChoice() {
    let randomIndex = parseInt(Math.random() * 9);
    buttons = document.querySelectorAll("button");
    let btn = buttons[randomIndex];
    if(count <= 8) {
        if(btn.innerHTML == "") {
            btn.innerHTML = cpuChoice;
            btn.setAttribute("disabled",true);
            checkWinner(randomIndex, cpuChoice);
            count++;
        }
        else {
            showCpuChoice();    // recursive call
        }
    }
    
}

function checkWinner(index, choice) {
    for(let i = 0; i < winningCombinations.length; i++) {
        for(let j = 0; j < winningCombinations[i].length; j++) {
            if(winningCombinations[i][j] == index) {
                winningCombinations[i][j] = choice;
            }
        }
    }

    for(let i = 0; i < winningCombinations.length; i++){
        if(winningCombinations[i][0] == choice && winningCombinations[i][1] == choice && winningCombinations[i][2] == choice) {
            // alert(choice + " wins...");
            return;
        }
    }
}

gameBoard();