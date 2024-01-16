// Event Binding
// we will bind HTML element with JS function
// also attach an event like click

// window.addEventListener("load", function() {
//     var btn = document.getElementById("btn");
//     btn.addEventListener("click", greet);
// });

window.addEventListener("load", initEvents);

function initEvents() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", greet);
}

function greet() {
    console.log("Greet Called...");
    var username = document.getElementById("username");
    // console.log(username.value);
    document.getElementById("output").innerText = username.value;
    username.value = "";
}