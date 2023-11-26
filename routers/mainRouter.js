import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("main/index", { pageTitle: "Main" });
});



export default router;
