import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: 24,
    }
    ,
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        index: true,
        unique: true,
    }
    ,
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8

    }
    ,
    isVerified: {
        type: Boolean,
        default: false,
    }
    ,
    role: {
        type: String,
        enum: ["admin", "member", "mod"],
        default: "member",
    }
    ,
    resetPasswordToken: String,
    resetPasswordExpires: Date,

},
    {
        timestamps: true,
    })

const User = mongoose.model("User", userSchema);

export default User;