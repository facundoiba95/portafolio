export default ( builder, getProject) => {
    builder.addCase( getProject.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    } )
    builder.addCase( getProject.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase( getProject.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.project = action.payload.foundProjectArray;
        state.status = action.payload.status;

        if(action.payload.status === 404){
            state.state = action.payload.status;
            state.message = action.payload.message;
        }
    })
}