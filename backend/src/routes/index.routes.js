import { Router } from 'express';

const router = Router();

router.get('/', async ( req,res ) => {
    try {
            res.statusCode = 200;
            res.send({
            name: 'Facundo Ibañez Gambarte',
            description: 'Api para portafolio de Facundo Ibañez Gambarte. Esta desarollada con Express y MongoDB.',
            github: 'https://github.com/facundoiba95',
            linkedin: 'https://www.linkedin.com/in/facundoiba'
        })
    } catch (error) {
        console.error(error)
        res.send(error)
    }
})

export default router;
