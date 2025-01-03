import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // get user id from request object

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // get all users except the logged in user

        res.status(200).json(allUsers); // send all users in response
        
    } catch (error) {
        console.log("Error in getUsers controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};