import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import router from "./routers/mainRouter.js";

class App {
  constructor() {
    this.app = express();
    this.getDBConfig();
    this.setViewEngine();
    this.setStatic();
    this.setMiddleware();
    this.getRouters();
  }

  getDBConfig() {}

  setViewEngine() {
    this.app.set("views", "src/views");
    this.app.set("view engine", "ejs");
  }

  setStatic() {
    this.app.use("/public", express.static("src/public"));
    this.app.use("/uploads", express.static("src/uploads"));
  }

  setMiddleware() {
    this.app.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );
    this.app.use(cookieParser());
    this.app.use(express.json()); // Parsing for json data
    this.app.use(express.urlencoded({ extended: false })); // Parsing for form data
  }

  getRouters() {
    this.app.use(router);
  }
}

export default App;
