import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 24,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    targetUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ["info", "warning", "issue", "task", "mention", "invite"],
        default: "info",
    },

},{
    timestamps: true
});

export default mongoose.model("Notification", notificationSchema);
