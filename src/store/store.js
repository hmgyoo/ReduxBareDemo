import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emails/emailSlice';
import fakeStoreReducer from '../features/fakestore/fakeStore'

export default configureStore({
  reducer: {
    email: emailReducer,
    fakeStore: fakeStoreReducer,
  },
});
