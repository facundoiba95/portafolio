import Project from '../models/Projects.js';
import cloudinary from 'cloudinary';
import fs from 'fs-extra';

export const getAllProjects = async ( req,res ) => {
    try {
        const findAllProjects = await Project.find();
        return res.status(200).json({findAllProjects, status:200});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}

export const getProject = async ( req,res ) => {
    try {
        const { idProject } = req.params;
        console.log(idProject);
        const foundProject = await Project.findById({_id: idProject});

        if(!foundProject) return res.status(404).json({message: 'Project not found', status:404});
        const foundProjectArray = [ foundProject ];
        return res.status(200).json({foundProjectArray, status:200});
    } catch (error) {
       console.error(error);
       return res.status(500).json({error}); 
    }
}

export const createProject = async ( req,res ) => {
    try {
        const { nameProject, linkProject, linkWebsite, content } = req.body;
        const techStack = JSON.parse(req.body.techStack);

        const newProject = new Project({
            name: nameProject,
            linkwebsite: linkWebsite,
            linkproject: linkProject,
            content,
            techStack
        })

        const images = ['img1', 'img2', 'img3', 'img4']; // nombre de los inputs file que recibo del frontend ( imagenes )

        for (const image of images) { // se utiliza el bucle for-of para ARRAYS, for-in es para objetos
          if (req.files[image]) {
            if (req.files[image].size > 10485760) {
              return res.status(202).json({ status: 202, message: 'Se permiten subir archivos menores a 10.4Mb' });
            }
        
            const result = await cloudinary.v2.uploader.upload(req.files[image][0].path);
            newProject[image] = result.secure_url;
            await fs.unlink(req.files[image][0].path);
          } else {
            newProject[image] = '';
          }
        }

        await newProject.save();

        return res.status(200).json({ status: 200, message:'Create project success.'});
    } catch (error) {
       console.error(error);
        return res.status(500).json({ status: 500, message:'Failed to create project.'}); 
    }
}   
