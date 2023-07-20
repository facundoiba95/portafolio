export default ( builders, createCertificate ) => {
    builders.addCase( createCertificate.rejected, ( state,action ) => {
        state.error = action.payload.message;
        state.isLoading = false;
        state.status = action.payload.status;
    })
    builders.addCase( createCertificate.pending, ( state,action ) => {
        state.isLoading = true;
    } )
    builders.addCase( createCertificate.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
    } )
}