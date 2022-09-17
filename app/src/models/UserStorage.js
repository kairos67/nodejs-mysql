"use strict";

const fs = require("fs").promises;
class UserStorage {
    static #getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // ==>[id, pswd, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; //id 하나에 해당하는 user정보를 넘겨줌 예:kairos,1234,카이로스
    }    

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        // const users = this.#users;
        return fs
            .readFile("./src/database/users.json")
            .then((data) => { //성공했을때
            return this.#getUserInfo(data,id); //가독성을 위해서 함수로처리
        })
           .catch (console.error); //실패했을때           
    }
 
    static save(userInfo) {
        // const users = this.#users;
        // console.log("test" , users);

        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pswd.push(userInfo.pswd);
        // console.log(users);
        return { success: true };
    }
}

module.exports = UserStorage;