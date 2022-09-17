"use strict";

const {response} = require("express");
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id, pswd} = await UserStorage.getUserInfo(client.id); //await 기다려줌 asinc에서만 사용
        
        if(id){
            if(id === client.id && pswd === client.pswd){
                return {success: true}
            }
            return {success: false, msg: "비밀번호가 틀렸습니다"};
        }
        return {success: false, msg: "존재하지 않는 id입니다."};
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);

        return response;
    }
}

module.exports = User;