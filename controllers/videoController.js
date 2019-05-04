//export const home = (req, res) => res.send("Home");

// view 폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후 보여준다.
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");

export const videos  = (req, res) => res.send("Videos");
export const upload  = (req, res) => res.send("Upload");
export const videoDetail  = (req, res) => res.send("VideoDetail");
export const editVideo  = (req, res) => res.send("EditVideo");
export const deleteVideo  = (req, res) => res.send("DeleteVideo");
