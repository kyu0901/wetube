// /join /login /search 등을 다루기 위함.

import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

//유일하게 독점적으로 URL을 다루는 방법.
const globalRouter = express.Router();

//#2.11 다른 것들도 마찮가지로 변경
//globalRouter.get(routes.home, (req, res) => res.send('Home'))
globalRouter.get(routes.home, home)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)
globalRouter.get(routes.search, search)

export default globalRouter;