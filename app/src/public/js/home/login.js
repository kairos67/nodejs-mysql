"use strict";

const id = document.querySelector("#id"),
    pswd = document.querySelector("#pswd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        pswd: pswd.value,
    };
    console.log(req);
});
