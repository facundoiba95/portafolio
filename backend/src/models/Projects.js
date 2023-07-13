import { Schema,model } from "mongoose";

const projectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    linkwebsite: String,
    linkproject: String,
    content: {
        type:String,
        required:true
    },
    techStack: [
        {
            type:String,
            required:true
        }
    ],
    img1: String,
    img2: String,
    img3: String,
    img4: String
},
{
    versionKey:false,
    timestamps:true
})

export default model('Project', projectSchema);