
const registerUser = (req, res) => {

    res.json({
        success: true,
        message: "User Registered Successfully!"
    })

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
