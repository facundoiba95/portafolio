import { Schema,model } from "mongoose";

const commentSchema = new Schema({
    username: String,
    content: String
},{
    versionKey: false,
    timestamps: true,
})

export default model('Comment', commentSchema);