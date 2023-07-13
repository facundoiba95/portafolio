import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import handleLoginBuilders from './usersBuilders/handleLoginBuilders';
import verifyTokenBuilders from './usersBuilders/verifyTokenBuilders';

const initialState = {
    error: null,
    isLoading: false,
    status: null,
    isAdmin: false,
    isLogged: false,
    token:null,
    verifed: false
}

export const handleLogin = createAsyncThunk(
    'users/handleLogin',
    async (user) => {
        try {
            const credentials = JSON.stringify(user);
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/login`,{
                method:"POST",
                headers: {
                    "Content-Type" : 'application/json',
                },
                mode:'cors',
                body: credentials
            })

            const res = await req.json();
            return res;
            
        } catch (error) {
            alert('Ocurrio un error al iniciar sesión');
            console.error('Ocurrio un error al iniciar sesión');
        }
    }
)

export const validateToken = createAsyncThunk(
    'validateToken/usersSlice',
    async () => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/validateToken`,{
                method: "POST",
                headers: {
                    "x-access-token": `${token}`
                }
            })
            const res = await req.json();
            return res;
        } catch (error) {
            alert('Ocurrio un error');
            console.log('Ocurrio un error', error);
        }
    }
)

export const usersSlice = createSlice({
    name:'usersSlice',
    initialState,
    reducers:{
        handleLogout: ( state,action ) => {
            state.isLoading = false;
            state.isLogged = false;
            state.isAdmin = false;
            state.verifed = false;
            localStorage.removeItem('token');
            state.token = localStorage.getItem('token');
        }
    },
    extraReducers: ( builder ) => {
        handleLoginBuilders( builder, handleLogin )
        verifyTokenBuilders( builder, validateToken );
    }
})

export const { handleLogout } = usersSlice.actions;

export default usersSlice.reducer;