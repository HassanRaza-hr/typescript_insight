"use strict";
// use of prompt and alert
function getuserInput() {
    let name = prompt("please enter your name");
    if (name) {
        alert(`good morning,${name}thanks for visiting our website`);
    }
    else {
        alert(`Good Morning! Anonyous thanks for visiting our website`);
    }
}
