
// how to accept user input

// 1. Easy way = window prompt
// 2. PROFESSIONAL WAY = HTML Text box


let username = window.prompt("What's your name?");
console.log(username);

let username1;

document.getElementById("mySubmit").onclick = function(){
    username1 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username1}`;
}

//------------------------------------------------------------------------------------------------
