import mongoose, { Schema } from "mongoose";

const workSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 24,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 240,
      trim: true,
    },
    type: {
      type: String,
      enum: ["task", "issue"],
      default: "task",
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved", "closed"],
      default: "open",
    },
    priority: {
      type: String,
      enum: ["urgent", "high", "medium", "low", "optional"],
      default: "medium",
    },
    deadline: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Work", workSchema);
