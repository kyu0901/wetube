//const express = require('express')
//express를 최신버젼으로
import express from "express";
//어플리케이션 만들기. express application
const app = express()

const PORT = 4000;

//listening이 시작될 때 호출됨.
const handleListening = () => console.log('Listening on: http://localhost:${PORT}');


/*
//request, response object
function handleHome(req, res){
    res.send("Hello from home");
}
 */
const handleHome = (req, res) => res.send("Hello from my ass");
/*
function handleProfile(req, res){
    res.send("You are on my profile");
} ES6 방식은 아래 것
*/
// '=>' 는 javascript의 arrow functions
const handleProfile = (req, res) => res.send("You are on my profile");

//누군가 main URl로 접근할 시
app.get("/", handleHome);

//http://localhost:4000/profile로 접근시.
app.get("/profile", handleProfile);

//application에게 PORT번호를 listen하게 한다.
app.listen(PORT, handleListening);