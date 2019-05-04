import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

//전체를 export하기.
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos)
videoRouter.get(routes.upload, upload)
videoRouter.get(routes.videoDetail, videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deleteVideo)

//export default란 파일로 export한다는 뜻.
export default videoRouter;