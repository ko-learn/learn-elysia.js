import mongoose from "mongoose";

export enum Role {
    ADMIN = "admin",
    USER = "user",
}

const schema = new mongoose.Schema({
    name: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    refreshToken: { type: String, default: null },
    role: { required: true, type: String, default: Role.USER },
});

const User = mongoose.model("User", schema);

export default User;
