
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter all fields!"
            })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, password: hashedPassword });

        // Create Access Token (short-lived)
        const accessToken = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        // Create Refresh Token (long-lived)
        const refreshToken = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        );

        // Send refresh token via HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });


        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            accessToken,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "server error " + err.message,
        })
    }

}

const loginUser = async (req, res) => {
  try {
    
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials", //  account enumeration ke liye 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials", //  account enumeration ke liye 
      });
    }

    // Generate access and refresh tokens 
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    
    user.refreshToken = refreshToken; 
    await user.save();

    // Set cookies (HttpOnly, Secure, SameSite; use 'secure' in production)
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 min
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    // Log error server-side only
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
};
const allUsers = () => {



}

export { registerUser, loginUser, allUsers };
