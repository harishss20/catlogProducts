import express from "express";
import ecomRouter from "./router/ecom.router.js";
import connectDb from "./lib/db.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3535;

connectDb();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.get("/", (req, res) => {
  res.send("message:welcome to backend");
});

app.use("/api/products", ecomRouter);

app.listen(port, () => {
  console.log(`port is listen to http://localhost:${port}`);
});
