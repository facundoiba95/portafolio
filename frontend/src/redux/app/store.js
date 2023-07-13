import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectSlice';
import usersSlice from '../features/users/usersSlice';

const store = configureStore({
    reducer:{
        projectSlice: projectSlice,
        usersSlice: usersSlice
    }
})

export default store