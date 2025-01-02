import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("token", token, {
        httpOnly: true, // only accessible by the server(prevent XSS attacks)
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict", // csrf protection
        secure: process.env.NODE_ENV === "production" ? true : false // cookie will only be set in https in production
    });
};

export default generateTokenAndSetCookie;