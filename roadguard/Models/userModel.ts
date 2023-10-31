import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    profileImage: {
        type: String,
    },
    type: {
        type: String,
    },
    hostel: {
        type: String,
    },
    phone: {
        type: String,
    },
    vehicle:{
        type: String,
    },
    address: {
        type: String,
    },
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;