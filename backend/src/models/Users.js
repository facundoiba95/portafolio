import mongoose, { Schema, model }  from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    email:{
        type:String,
        require: true,
        unique:true,
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
    ],
    password: {
        type: String,
        requied:true
    }
},
{
    versionKey:false,
    timestamps:true
})

userSchema.statics.encryptPassword = async ( password ) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

userSchema.statics.comparePassword = async ( password, recivedPassword ) => {
    return await bcrypt.compare( password, recivedPassword )
}

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
})

export default model('User', userSchema);
