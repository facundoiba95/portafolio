import User from '../models/Users.js';
import Roles from '../models/Role.js';
import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const handleLogin = async ( req,res ) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({email});
        
        if(!foundUser) return res.status(404).json({message:'User not found.', status:404});

        const matchPassword = await User.comparePassword(password, foundUser.password);

        const token = Jwt.sign({ id: foundUser._id }, process.env.SECRET,{
            expiresIn: 3000
        })

        if(matchPassword){
            return res.status(200).json({ status:200, token, isAdmin: req.isAdmin })
        } else {
            return res.status(403).json({ status:403, message:'Invalid password'});
        }

    } catch (error) {
        console.error('Error in handleLogin(). Error: ', error)
        return res.status(500).json({error})
    }
}

export const authResult = async ( req, res ) => {
    try {
        const token = req.headers['x-access-token'];
        const user = await User.findOne(req.email);
        const roles = await Roles.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin" || roles[i].name === "moderator") {
            res.status(200).json({ token, isAdmin: req.isAdmin, status:200 });
            return;
        }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}