export default (builder, validateToken) => {
    builder.addCase(validateToken.pending, ( state,action ) => {
        state.isLoading = true;
    })

    builder.addCase(validateToken.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLoading = false;
    })

    builder.addCase(validateToken.fulfilled, ( state,action ) => {
        if(action.payload.status === 200){
            state.isLoading = false;
            state.verifed = action.payload.isAdmin;
            state.isAdmin = action.payload.isAdmin;
            state.token = action.payload.token;
            state.status = action.payload.status;
            state.isLogged = true;
        } else {
            state.isLoading = false;
            state.verifed = action.payload.isAdmin;
            state.isAdmin = action.payload.isAdmin;
            state.token = action.payload.token;
            state.status = action.payload.status;
            state.isLogged = false;
            state.error = action.payload.message;
        }
    })
}