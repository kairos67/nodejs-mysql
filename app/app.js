//환경설정
"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//routes
const home = require("./src/routes/home");
const { application } = require("express");

//app settings
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static('./src/public'));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글,공백 처리
app.use(bodyParser.urlencoded({ extended:true }));
app.use("/", home); //use ->미들웨어를 등록해주는 메서드

module.exports = app;