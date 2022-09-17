"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};


const process = {
    login: async (req, res) => {
        
        const user = new User(req.body);
        const response = await user.login();
        // console.log(response);
        return res.json(response); //client에게 응답        
        
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        // console.log(response);
        return res.json(response); //client에게 응답   
    }
};

module.exports = {
    output,
    process,
}