
import User from "../models/userModel.js";
const registerUser = async (req, res) => {

    try{
    const { name, email, password } = req.body ;

    if(!name, !email, !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter all fields!"
        })
    }

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists!"
        })
    }

    const newUser = await User.create({ name, email, password });

    res.json({
        success: true,
        message: `${name} with this ${email} Registered Successfully!`
    })}
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "server error " + err.message,
        })
    }

}
const loginUser = (req, res) => {

    res.json({
        success: true,
        message: "User Logged In Successfully!"
    })

}
const allUsers = () => {



}

export { registerUser, loginUser, allUsers };
