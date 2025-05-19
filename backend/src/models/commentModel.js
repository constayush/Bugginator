import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 240,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    work: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Work",
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;