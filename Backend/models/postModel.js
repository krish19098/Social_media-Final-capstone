//postModel>models>server
import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user who made the comment
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
