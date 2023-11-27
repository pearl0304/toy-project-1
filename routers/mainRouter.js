import {Router} from "express";
import {mainController} from "../controllers/mainController.js";

const router = Router();

router.get("/", mainController.getMainPage);

export default router;
