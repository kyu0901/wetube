//const express = require('express')
//express를 최신버젼으로
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//#2.9 MVC에서 바꿔줬음.
//import { userRouter } from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

//어플리케이션 만들기. express application
const app = express()

//완전히 허용할 수 없기에 없애기.
//const handleHome = (req, res) => res.send("Hello from my ass");
//const handleProfile = (req, res) => res.send("You are on my profile");

//middleware
app.use(helmet());
//확장자 pug를 view engine에서 설정.
app.set('view engine', "pug");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

//이것이 아래의 Router들보다 먼저 실행해야 Router에서 사용가능.
app.use(localsMiddleware)

//누군가 main URl로 접근할 시 //MVC할 때 완전히 허용할 수 없기에 지우자.
//app.get("/", handleHome);

//http://localhost:4000/profile로 접근시. //완전히 허용할 수 없음 지우기!
//app.get("/profile", handleProfile);

//join login home을 위한 global router
app.use(routes.home, globalRouter);

//#2.9 MVC에서 바꿔줬음.
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


//누군가 내 파일을 불러올 때 app object를 주겠다.
export default app;