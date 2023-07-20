export default (builders, getAllCertificates) => {
    builders.addCase( getAllCertificates.rejected, ( state,action ) => {
        state.error = action.payload.message;
        state.isLoading = false;
        state.status = action.payload.status;
    })
    builders.addCase( getAllCertificates.pending, ( state,action ) => {
        state.isLoading = true;
    } )
    builders.addCase( getAllCertificates.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.allCertifications = action.payload;
    } )
}