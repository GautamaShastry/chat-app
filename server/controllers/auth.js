import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = (req, res) => {
    res.send("Login route");
}

export const signup = async (req, res) => {
    try {
        const { fullName, username, email, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({ error: "User already exists" });
        }

        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Profile Pic based on user gender
        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?${username}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?${username}`;

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res); // generate token and set cookie
            await newUser.save(); // save user to database

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const logout = (req, res) => {
    res.send("Logout route");
}