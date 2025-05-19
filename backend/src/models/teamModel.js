import mongoose from "mongoose";
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxlength: 24,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        members: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
                role: {
                    type: String,
                    enum: ["admin", "moderator" ,"member"],
                    default: "member",
                },

            },
        ],

        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Project",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Team", teamSchema);