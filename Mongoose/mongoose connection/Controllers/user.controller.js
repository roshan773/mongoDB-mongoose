const User = require("../Models/User.model");

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const response = await User.create({ name, email, password });
        res.status(201).json({ message: "User Registered Successfully", response });
    } catch (error) {
        res.status(500).json({ message: "Unable to create User", error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Unable to login", error });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch users", error });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User fetched successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch user", error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { name, email, password });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Unable to update user", error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Unable to delete user", error });
    }
};
