import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import verifyRoles from "../middlewares/verifyRoles.js";
import { createProject, getAllProjects, getProject } from "../controllers/projects.controllers.js";
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import multer from 'multer';
import cloudinary from 'cloudinary';
import { config } from "dotenv";
config();

const router = Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRET
  })

const storage = multer.diskStorage({
    destination:(req,files,cb) => {
    cb(null, files = path.join(__dirname)) // guardar las imagenes en este directorio.
  },
    filename:(req,files,cb) => {
    cb(null, files.originalname); //Agregar extension de archivo de imagen.
  }
    });

const upload = multer({storage: storage,
      fileFilter: (req, files, cb) => {
      if (!files.originalname.match(/\.(jpeg|gif|tif||tiff|heif|eps|ai|pdf|psd|webp|png|bmp|svg|jpg|avif|mp4|mov|gif|avi|mpeg|3gp|JPG)$/)) {
      return cb(new Error('Error en el tipo de archivo.'));
      }
      cb(null, true);
      }
    });


router.post('/createProject', [ verifyToken, verifyRoles ] ,upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 }
]), createProject);

router.get('/getAllProjects', getAllProjects);
router.get('/getProject/:idProject', getProject);

export default router;



