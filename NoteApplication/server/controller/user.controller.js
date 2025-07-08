const mongoose = require("mongoose")
require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../model/user.model");

const userController = {
    test: (req, res) => {
        res.status(200).json({ message: "Test route is working properly" })
    },
    register: async (req, res) => {
        if (!req?.body) {
            return res.status(400).json({ message: "Request Body is Required" })
        }
        const { email, name, password } = req?.body;

        if (!email || !name || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        try {
            const isExistuser = await User.findOne({ email })
            if (isExistuser) {
                return res.status(400).json({ message: "User Already exist" })
            }

            try {
                const hashpassword = await bcrypt.hash(password, 5);
                await User.create({ ...req.body, password: hashpassword });
                res.status(201).json({ message: "User Regsitered Successfully" });
            } catch (error) {
                return res.status(500).json({ message: error.message || "Error hashing password" })
            }
        } catch (error) {
            console.error("Error during regsitration", error)
            return res.status(500).json({ message: error?.message || "Internal Server Error" })
        }
    },
    login: async (req, res) => {
        // res.status(202).json({ message: "Login router is working properly" })
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        try {
            const isExistuser = await User.findOne({ email: req.body.email });
            if (!isExistuser) {
                return res.status(400).json({ message: "User does not Exist" })
            }

            const isPasswordMatch = await bcrypt.compare(
                req.body.password,
                isExistuser.password
            );

            if (!isPasswordMatch) {
                return res.status(400).json({ message: "Invalid password" });
            }

            const { password, ...rest } = isExistuser._doc;

            try {
                const token = jwt.sign({ ...rest }, process.env.JWT_SECRET);
                res.cookie("Access_Token", token).status(200).json({ message: "User signed in successfully", user: rest, token })
            } catch (error) {
                return res.status(500).json({message: "Error Generating token", error: error.message})
            }

        } catch (error) {
            console.error("Error During sign-in: ", error);
            return res.status(500).json({message: error?.message || "Internal server error"})
        }
    }
};


module.exports = userController