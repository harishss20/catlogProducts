import express from "express";
import ecomRouter from "./router/ecom.router.js";
import connectDb from "./lib/db.js";
import userRouter from "./router/user.router.js";
import adminAuth from "./router/Admin.router.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3535;

connectDb();

app.use(
  cors({
    origin: "https://nandha-kumar-milk-agency.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("message: welcome to backend");
});

app.use("/api/products", ecomRouter);
app.use("/api/form/submit", userRouter);
app.use("/api/admin", adminAuth);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
