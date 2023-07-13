import Roles from '../models/Role.js'
import User from '../models/Users.js';

export default async ( req,res,next ) => {
    try {
        const user = await User.findOne(req.email);
        const roles = await Roles.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin" || roles[i].name === "moderator") {
            req.isAdmin = true;
            next();
            return;
          }
        }
        req.isAdmin = false;
        return res.status(403).json({ message: "Require Admin Role!", status: 403, isAdmin: req,isAdmin});
    } catch (error) {
      console.error(error)
      return res.status(500).json({error, status: 500 })
    }
}