import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    //pug에서 siteName을 불러올 수 있다.
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};