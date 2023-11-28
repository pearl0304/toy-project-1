import {Router} from "express";
import {memberController} from "../controllers/memerController.js";

const userRouter = Router();
userRouter.get('/login', memberController.getLoginPage);
userRouter.post('/loginCheck', memberController.loginCheck);
userRouter.get('/signup', memberController.getSignupPage);
userRouter.post('/signupCheck', memberController.signupCheck);

export default userRouter;