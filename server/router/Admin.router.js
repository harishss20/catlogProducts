import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username !== adminUsername) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, adminPassword);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    const payload = {
      admin: {
        username: adminUsername,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
