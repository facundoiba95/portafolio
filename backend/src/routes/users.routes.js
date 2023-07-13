import { Router } from "express";
import { authResult, handleLogin } from "../controllers/users.controllers.js";
import verifyRoles from "../middlewares/verifyRoles.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post('/login',[ verifyRoles ], handleLogin)
router.post('/validateToken', [ verifyToken, verifyRoles ], authResult);

export default router;