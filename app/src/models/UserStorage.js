"use strict";

class UserStorage{
     static #users = { // #은닉화
        id: ["kairos", "나개발", "김팀장"],
        pswd: ["1234", "1234", "1234"],
        name: ["카이로스","나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return  newUsers;
    }
}

module.exports = UserStorage;