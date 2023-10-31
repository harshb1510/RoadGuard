import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    profileImage: {
        type: String,
    },
     photo: {
        type: String,
    },
    caption: {
        type: String,
    },
})

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;