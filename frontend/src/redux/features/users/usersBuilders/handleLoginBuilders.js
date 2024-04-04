export default ( builder, handleLogin ) => {
    builder.addCase( handleLogin.fulfilled, ( state,action ) => {
        if(action.payload.status === 200){
            state.isLoading = false;
            state.isAdmin = action.payload.isAdmin;
            state.status = action.payload.status;
            state.token = action.payload.token;
            state.isLogged = true;
            state.error = null;
            state.verifed = true;
            localStorage.setItem('token', action.payload.token);
            return;
        } else {
            state.isLoading = false;
            state.isAdmin = false;
            state.status = action.payload.status;
            state.token = action.payload.token;
            state.error = action.payload.message;
            state.isLogged = false;
            state.verifed = false;
            localStorage.removeItem('token')
            return;
        }
    })

    builder.addCase( handleLogin.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
        state.isAdmin = false;
        state.token = action.payload.token;
        state.isLogged = false;
    })
    builder.addCase ( handleLogin.pending, ( state,action ) => {
        state.isLoading = true;
    } )
}