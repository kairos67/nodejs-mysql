//환경설정
"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); //환경변수설정, os마다 환경설정이 다르므로 node에서 제공
const morgan = require("morgan"); //logging

const app = express();
const { application } = require("express");

dotenv.config();

const accessLogStream = require("./src/config/log");
//routes
const home = require("./src/routes/home");

//app settings
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static('./src/public'));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글,공백 처리
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan("dev"))
app.use(morgan("common", {stream:accessLogStream}));

app.use("/", home); //use ->미들웨어를 등록해주는 메서드

module.exports = app;