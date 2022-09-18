"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            // 성공했을때 resolve, 실패했을때 reject
            const query = "SELECT * FROM users WHERE id =?";
            db.query(query, [id], (err, data) => {
                if (err) reject('${err}');
                 console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            // 성공했을때 resolve, 실패했을때 reject
            const query = "INSERT INTO u1sers(id, name, password ) VALUES(?, ?,?)";
            console.log(userInfo);
            db.query(query, [userInfo.id, userInfo.name, userInfo.pswd], (err) => {
                if (err) reject('${err}');                
                resolve({success: true});
            });
        });
    }
}

module.exports = UserStorage;
