"use strict";


const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["kairos", "나개발", "김팀장"],
    pswd: ["1234", "1234", "1234"]
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pswd = req.body.pswd;
        console.log(id, pswd);
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pswd[idx] === pswd) {
                return res.json({success: true});
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패"
        });
    },
}
module.exports = {
    output,
    process,
}