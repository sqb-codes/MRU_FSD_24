var box = document.querySelector("#box");
var num_buttons = document.querySelectorAll(".num");

for (var btn of num_buttons) {
    btn.addEventListener("click", appendNum);
}

function appendNum() {
    box.value += this.innerText;
}