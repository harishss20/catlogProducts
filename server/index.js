import express from "express";
import ecomRouter from "./router/ecom.router.js";
import connectDb from "./lib/db.js";
const app = express();
const port = process.env.PORT || 3535;

connectDb();
app.get("/", (req, res) => {
  res.send("message:welcome to backend");
});

app.use("/ecom", ecomRouter);

app.listen(port, () => {
  console.log(`port is listen to http://localhost:${port}`);
});
