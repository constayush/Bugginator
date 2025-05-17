import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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


    userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    })





const User = mongoose.model("User", userSchema);


export default User;