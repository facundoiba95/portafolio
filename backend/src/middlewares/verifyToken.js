import { config } from "dotenv";
import User from "../models/Users.js";
import Jwt from 'jsonwebtoken';
config();

export default async ( req,res,next ) => {
    const token = req.headers['x-access-token'];

try {
    if(!token) return res.status(401).json({message:'No token provided', status: 401 });

    const decode = Jwt.verify(token, process.env.SECRET)
    req.userID = decode.id;

    const user = await User.findById(req.userID, { password:0 });
    if(!user) return res.status(404).json({message:'Not user found.', status: 404 })
    next();
} catch (error) {
    console.log('Unauthorized');
    req.isAdmin = false;
    return res.status(401).json({message:'Unauthorized', status: 401, isAdmin: req.isAdmin })
}
}