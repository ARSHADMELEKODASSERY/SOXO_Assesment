import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// Register
router.post("/login", async (req, res) => {
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ token: generateToken(user._id) });
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // You can also limit fields with .select("name email role")
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// route to profile
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

// Admin-Dashboard route
router.get("/admin/dashboard", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//users secssion
router.get("/user/data", protect, authorizeRoles("user"), (req,res) => {
    res.json({message: res})
})


export default router;
