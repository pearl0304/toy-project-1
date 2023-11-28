import {Router} from "express";
import {mainController} from "../controllers/mainController.js";
import userRouter from "./memberRouter.js";


const router = Router();

router.get("/", mainController.getMainPage);
router.use("/member", userRouter);
export default router;
