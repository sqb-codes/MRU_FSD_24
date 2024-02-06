var box = document.querySelector("#box");
var num_buttons = document.querySelectorAll(".num");
var opr_buttons = document.querySelectorAll(".opr");
document.querySelector(".result").addEventListener("click", calc);
var boxValue = "";

for (var btn of num_buttons) {
    btn.addEventListener("click", appendNum);
}

for (var btn of opr_buttons) {
    btn.addEventListener("click", appendOpr);
}

function appendNum() {
    box.value += this.innerText;
    boxValue = box.value;
}

function appendOpr() {
    box.value = boxValue + this.innerText;
}

function calc() {
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}








