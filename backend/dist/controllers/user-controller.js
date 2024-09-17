import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    try {
        //get all users from the database
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        //if an error occurs, pass it to the error handler
        console.log(error);
        return res.status(200).json({ message: "Error", casuse: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        //User Login
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send({ message: "User already exists" });
        }
        //Encrypt the password
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res
            .status(201)
            .json({ message: "User has been signed up!", id: user._id.toString() });
    }
    catch (error) {
        //if an error occurs, pass it to the error handler
        console.log(error);
        return res
            .status(200)
            .json({ message: "Error signing up", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        //get all users from the database
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({ message: "User not registered" });
        }
        //compare the password
        const isValid = await compare(password, user.password);
        if (!isValid) {
            return res.status(403).send("Incorrect Password");
        }
        //create token and store cookies
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires: expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "User logged in", id: user._id.toString() });
    }
    catch (error) {
        //if an error occurs, pass it to the error handler
        console.log(error);
        return res
            .status(200)
            .json({ message: "Error signing up", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map