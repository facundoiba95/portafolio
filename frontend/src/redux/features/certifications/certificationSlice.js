import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllCertificatesBuilders from './certificationsBuilders/getAllCertificatesBuilders';
import createCertificationsBuilders from './certificationsBuilders/createCertificationsBuilders';

const initialState = {
    error: null,
    isLoading: false,
    allCertifications: [],
    status: null,
    message: null,
};

export const createCertificate = createAsyncThunk(
    'certificateSlice/createCertificate',
    async (newCertificate) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}certificates/createCertificate`,{
                mode:'cors',
                method:'POST',
                headers:{
                    "x-access-token": `${token}`,
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(newCertificate)
            })

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en createCertificate.', error);
            alert('Ocurrio un error en createCertificate slice redux.')
        }
    }
);

export const getAllCertificates = createAsyncThunk(
    'certificateSlice/getAllCertificates',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}certificates/getAllCertificates`,{
                mode:'cors',
                method:'GET',
                headers:{
                    "Content-Type": "application/json"
                }
            })

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getAllCertificates.', error);
            alert('Ocurrio un error en getAllCertificates slice redux.')
        }
    }
)

const certificateSlice = createSlice({
    name: 'certificationSlice',
    initialState,
    reducers: {},
    extraReducers: ( builders ) => {
        getAllCertificatesBuilders(builders, getAllCertificates);
        createCertificationsBuilders( builders, createCertificate );
    }
})

export default certificateSlice.reducer;