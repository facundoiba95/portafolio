import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendMessageBuilders from './messageBuilders/sendMessageBuilders';

const initialState = {
    error: null,
    isLoading: false,
    message: null,
    status: null
}

export const sendMessage = createAsyncThunk(
    'messageSlice/sendMessage',
    async (message) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}message/sendMessage`,{
                mode:'cors',
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            })

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en sendMessage slice', error)
            alert('Ocurrio un error en sendMessage slice');
        }
    }
)

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState,
    reducers:{
        restartStatusMessage: ( state,action ) => {
            state.status = null;
            state.isLoading = false;
            state.message = null;
        }
    },
    extraReducers: ( builders ) => {
        sendMessageBuilders( builders, sendMessage );
    }
})

export const { restartStatusMessage } = messageSlice.actions;

export default messageSlice.reducer;