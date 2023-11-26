import App from "./app.js";

const app = new App().app;
const Port = 9001;

app.listen(Port, () => {
  console.log(`🚀Express server connect! http://localhost:${Port}`);
});
