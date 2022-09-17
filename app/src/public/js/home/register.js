"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pswd = document.querySelector("#pswd"),
    confirmPswd = document.querySelector("#confirm-pswd"),    
    registerBtn = document.querySelector("#button");
    console.log("hello registered");    

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        pswd: pswd.value,
        confirmPswd: confirmPswd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    fetch("/register", { //여기는 FE이고,일반적으로 개발시는 BE가 만들어진뒤 개발함.
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login"; //회원가입정보를 정상적으로 받으면 로그인 페이지로 이동
            } else {
               alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러발생");
        });
};
