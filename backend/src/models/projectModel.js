import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
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
        maxlength: 24,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },

    members: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            role: {
                type: String,
                enum: ["admin", "moderator", "member"],
                default: "member",
            },
        }],

    workItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WorkItem",
        }
    ],
}
    ,
    {
        timestamps: true,
    }
);

export default mongoose.model("Project", projectSchema);