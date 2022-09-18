"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const { id, password } = await UserStorage.getUserInfo(client.id); //await 기다려줌 asinc에서만 사용
             console.log(client);
            if (id) {
                if (id === client.id && password === client.pswd) {
                    return { success: true }
                }
                return { success: false, msg: "비밀번호가 틀렸습니다" };
            }
            return { success: false, msg: "존재하지 않는 id입니다." };
        } catch (err) {
            return { success: false, msg: err};
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (error) {
            return { success: false, msg: error };
        }
    }
}
module.exports = User;