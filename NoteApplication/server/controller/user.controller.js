const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const userController = {
    test: (req, res) => {
        res.status(200).json({ message: "Test route is working properly" });
    },

    register: async (req, res) => {
        if (!req?.body) {
            return res.status(400).json({ message: "Request Body is Required" });
        }
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        try {
            const isExistUser = await User.findOne({ email });
            if (isExistUser) {
                return res.status(400).json({ message: "User Already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 5);
            await User.create({ ...req.body, password: hashedPassword });

            res.status(201).json({ message: "User Registered Successfully" });
        } catch (error) {
            console.error("Error during registration", error);
            return res.status(500).json({ message: error.message || "Internal Server Error" });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        try {
            const isExistUser = await User.findOne({ email });
            if (!isExistUser) {
                return res.status(400).json({ message: "User does not exist" });
            }

            const isPasswordMatch = await bcrypt.compare(password, isExistUser.password);
            if (!isPasswordMatch) {
                return res.status(400).json({ message: "Invalid password" });
            }

            const { password: pass, ...userWithoutPassword } = isExistUser._doc;

            const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET_KEY, {
                expiresIn: "7d",
            });

            res
                .cookie("access_token", token, {
                    httpOnly: true,
                    secure: false, // change to true in production with HTTPS
                    sameSite: "lax",
                })
                .status(200)
                .json({
                    message: "User signed in successfully",
                    user: userWithoutPassword,
                });

        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({ message: error.message || "Internal Server Error" });
        }
    }
};

module.exports = userController;
