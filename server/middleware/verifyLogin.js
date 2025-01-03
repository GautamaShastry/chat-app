import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyLogin = async (req, res, next) => {
    try {
        const token = req.cookies.token; // get token from cookies
        if (!token) return res.status(401).json({ error: "Unauthorized - No token provided" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.status(401).json({ error: "Unauthorized - Invalid token" });

        const user = await User.findById(verified.userId).select("-password");
        if (!user) return res.status(401).json({ error: "User not found" });

        req.user = user; // set user in request object to be used in the route handler

        next(); // move to the next middleware
    } catch (error) {
        console.log("Error in verifyLogin middleware: ", error.message);
        res.status(401).json({ error: "Internal Server Error" });
    }
};

export default verifyLogin;

// verify whether the user is logged in or not