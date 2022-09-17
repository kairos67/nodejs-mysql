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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // ==>[id, pswd, name]
        const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; //id 하나에 해당하는 user정보를 넘겨줌 예:kairos,1234,카이로스
    }
    static save(userInfo){
        const users = this.#users;
        // console.log("test" , users);
        
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pswd.push(userInfo.pswd);
        // console.log(users);
        return { success: true};
    }
}

module.exports = UserStorage;