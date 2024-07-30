export default ( builder, getAllProjects) => {
    builder.addCase( getAllProjects.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    } )
    builder.addCase( getAllProjects.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase( getAllProjects.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.projects = action.payload.projects;
        state.status = action.payload.status;    
    })
}