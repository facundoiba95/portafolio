import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllProjectsBuilders from './projectBuilders/getAllProjectsBuilders';
import getProjectBuilders from './projectBuilders/getProjectBuilders';
import createProjectBuilders from './projectBuilders/createProjectBuilders';

const initialState = {
    error: null,
    isLoading: false,
    allProjects: [],
    project: [],
    status: [],
    message: null
}

export const createProject = createAsyncThunk(
    'projects/createProject',
    async (form) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}projects/createProject`,{
                method:"POST",
                mode:'cors',
                headers:{
                    "x-access-token": `${token}`,
                },
                body: new FormData(form)
            })
            
            const res = await req.json();
            return res;

        } catch (error) {
            alert('Ocurrio un error al crear el proyecto');
            console.error('Ocurrio un error al crear el proyecto');
        }
    }
)

export const getAllProjects = createAsyncThunk(
    'projects/getAllProjects',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}projects/getAllProjects`,{
                mode:'cors',
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const res = await req.json();
            return res;
        } catch (error) {
            alert('Ocurrio un error al obtener todos los proyectos.');
            console.error('Ocurrio un error al obtener todos los proyectos.'); 
        }
    }
)

export const getProject = createAsyncThunk(
    'projects/getProject',
    async (idProject) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}projects/getProject/${idProject}`,{
                mode:'cors',
                method:"GET",
                headers:{
                    "Content-Type" : "application/json"
                }
            })

            const res = await req.json();
            return res;
        } catch (error) {
            alert('Ocurrio un error al obtener el proyecto');
            console.error('Ocurrio un error al obtener el proyecto'); 
        }
    }
)

export const projectSlice = createSlice({
    name:'projectSlice',
    initialState,
    reducers:{
        restartStatusProject: ( state, action ) => { 
            state.status = null;
        }
    },
    extraReducers: ( builder ) => {
       getAllProjectsBuilders( builder, getAllProjects );
       getProjectBuilders( builder, getProject );
       createProjectBuilders( builder, createProject );
    }
})

export const { restartStatusProject } = projectSlice.actions;
export default projectSlice.reducer;