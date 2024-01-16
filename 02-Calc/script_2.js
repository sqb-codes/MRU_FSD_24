window.addEventListener("load", initEvents);

function initEvents() {
    var box_1 = document.querySelector("#box_1");
    var box_2 = document.querySelector("#box_2");
    
    var btns = document.querySelectorAll("button");
    // for(var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", calc);
    // }

    for (var btn of btns) {
        btn.addEventListener("click", calc);
    }

}

function calc() {
    // console.log(this);
    // console.log(this.innerText);

    var opr = this.innerText;
    // if(opr == "+") {
    //     var result = parseInt(box_1.value) + parseInt(box_2.value);
    // }
    // else if(opr == "-") {
    //     var result = parseInt(box_1.value) - parseInt(box_2.value);
    // }
    // else if(opr == "/") {
    //     var result = parseInt(box_1.value) / parseInt(box_2.value);
    // }
    // else if (opr == "*") {
    //     var result = parseInt(box_1.value) * parseInt(box_2.value);
    // }
    // else {
    //     var result = "";
    // }

    var expression = box_1.value + opr + box_2.value;
    // console.log(expression);
    var result = eval(expression);
    document.querySelector("#box_3").value = result;
}