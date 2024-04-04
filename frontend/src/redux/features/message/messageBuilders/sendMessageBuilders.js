export default ( builders, sendMessage ) => {
    builders.addCase( sendMessage.rejected, ( status, action ) => {
        status.status = action.payload.status;
        status.error = action.payload.message;
        status.isLoading = false;
    } );
    builders.addCase( sendMessage.pending, ( state,action ) => {
        state.isLoading = true;
    } );
    builders.addCase( sendMessage.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
    } )
}