import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectSlice';
import usersSlice from '../features/users/usersSlice';
import certificationSlice from '../features/certifications/certificationSlice';

const store = configureStore({
    reducer:{
        projectSlice: projectSlice,
        usersSlice: usersSlice,
        certificationSlice: certificationSlice
    }
})

export default store