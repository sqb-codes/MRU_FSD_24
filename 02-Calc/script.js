window.addEventListener("load", initEvents);

function initEvents() {
    var box_1 = document.querySelector("#box_1");
    var box_2 = document.querySelector("#box_2");
    
    var add_btn = document.querySelector("#add");
    add_btn.addEventListener("click", add);

    var sub_btn = document.querySelector("#sub");
    sub_btn.addEventListener("click", sub);

    var div_btn = document.querySelector("#div");
    div_btn.addEventListener("click", div);

    var mul_btn = document.querySelector("#mul");
    mul_btn.addEventListener("click", mul);
}

function add() {
    var result = parseInt(box_1.value) + parseInt(box_2.value);
    document.querySelector("#box_3").value = result;
}

function sub() {
    var result = parseInt(box_1.value) - parseInt(box_2.value);
    document.querySelector("#box_3").value = result;
}

function div() {
    var result = parseInt(box_1.value) / parseInt(box_2.value);
    document.querySelector("#box_3").value = result;
}

function mul() {
    var result = parseInt(box_1.value) * parseInt(box_2.value);
    document.querySelector("#box_3").value = result;
}