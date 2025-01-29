import mongoose from "mongoose";
const {Schema, model} = mongoose

const UserSchema = Schema({
    email: {type: String},
    name: {type: String, required: false},
    username: {type: String, required: false},
    profilePic: {type: String, required: false},
    coverPic: {type: String, required: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

});


export default mongoose.models.User || model('User', UserSchema);