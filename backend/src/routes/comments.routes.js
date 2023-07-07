import { Router } from 'express';
import { getComments, saveComment } from '../controllers/comments.controllers.js';

const router = Router();

router.get('/getComments', getComments)
router.post('/saveComment', saveComment)

export default router;

