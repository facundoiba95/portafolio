import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectSlice';
import usersSlice from '../features/users/usersSlice';
import certificationSlice from '../features/certifications/certificationSlice';
import messageSlice from '../features/message/messageSlice';

const store = configureStore({
    reducer:{
        projectSlice: projectSlice,
        usersSlice: usersSlice,
        certificationSlice: certificationSlice,
        messageSlice : messageSlice
    }
})

export default store