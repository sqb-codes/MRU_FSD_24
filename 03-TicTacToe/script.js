const userChoice = "X";
const cpuChoice = "0";
let count = 0;

function gameBoard() {
    let table = document.querySelector("#table");
    for(let i = 0; i < 3; i++) {
        let tr = table.insertRow();
        for(let j = 0; j < 3; j++) {
            let td = tr.insertCell();
            // dynamic way to create HTML elements using JS
            let button = document.createElement("button");
            // how to add class on HTML tag using JS
            button.className = "btn";
            td.appendChild(button);
            button.addEventListener("click", showUserChoice);
        }
    }
}

function showUserChoice() {
    // this - the button on which you have clicked
    // 'this' is a reserved keyword
    // 'this' points to the current button that you have clicked
    this.innerHTML = userChoice;
    this.setAttribute("disabled",true);
    count++;
    showCpuChoice();
}

function showCpuChoice() {
    let randomIndex = parseInt(Math.random() * 9);
    let buttons = document.querySelectorAll("button");
    let btn = buttons[randomIndex];
    if(count <= 8) {
        if(btn.innerHTML == "") {
            btn.innerHTML = cpuChoice;
            btn.setAttribute("disabled",true);
            count++;
        }
        else {
            showCpuChoice();    // recursive call
        }
    }
    
}

gameBoard();