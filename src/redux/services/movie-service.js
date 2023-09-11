import { baseApi } from "./base-service";

export const movieServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopTen: builder.query({
      query: () => ({
        url: `/movie/top_rated`,
        method: "GET",
      }),
      // transformResponse: response => response.data,
    }),
    searchMovies: builder.mutation({
      query: (body) => {
        return {
          url: `/keyword/${body.keyword}`,
          method: "GET",
        };
      },
    }),
    singleMovie: builder.query({
      query: (body) => {
        return {
          url: `/movie/${body.id}`,
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTopTenQuery,
  useSearchMoviesMutation,
  useSingleMovieQuery,
} = movieServiceApi;
