const User = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userController = {
    test: (req, res) => {
        res.status(200).json({ message: "user test routes are working" })
    },

    register: async (req, res) => {
        // res.status(200).json({message: "user register routes are working"})

        const { username, email, password } = req.body

        if (!username || !email || !password) {
            res.status(400).json({ message: "All fields are required" })
        }

        try {
            const exituser = await User.findOne({ email })
            if (exituser) {
                res.status(200).json({ message: "User is already registered" })
            }

            const hashpassword = await bcrypt.hash(password, 10)
            const adduser = await User({ username, email, password: hashpassword })
            await adduser.save()
            res.status(200).json({ message: "User Registered successfully", adduser })
        } catch (error) {
            res.status(500).json({ message: "Unable to register user", error: error.message })
        }

    },

    login: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "User not found. Please register first." });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_Secreatkey,
                { expiresIn: "1d" }
            );

            // Save token in cookies
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // set to true in production
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            });

            res.status(200).json({ message: "Login Successful", token });
        } catch (error) {
            res.status(500).json({ message: "Unable to login. Try again later.", error: error.message });
        }
    }

}

module.exports = userController