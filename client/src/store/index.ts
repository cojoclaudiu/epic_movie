import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { movieApi } from './services/movie';

export const store = configureStore({
  // Add the generated reducer as a specific top-level slice
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

setupListeners(store.dispatch);
