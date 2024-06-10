import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlices';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
