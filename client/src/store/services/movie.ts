// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../../types';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
  endpoints: (builder) => ({
    getMovieData: builder.query<IMovie, void>({
      query: () => `movies`
    })
  })
});

export const { useGetMovieDataQuery } = movieApi;
