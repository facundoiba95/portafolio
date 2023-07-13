export default ( builder, createProject) => {
    builder.addCase( createProject.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    } )
    builder.addCase( createProject.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase( createProject.fulfilled, ( state,action ) => {
        state.status = action.payload.status;
        state.isLoading = false;
        state.message = action.payload.message;
    })
}