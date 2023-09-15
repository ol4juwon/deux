import { baseApi } from "./base-service";

export const movieServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopTen: builder.query({
      query: () => ({
        url: '/movie/top_rated?language=en-US&region=US',
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
          url: `/movie/${body.id}?append_to_response=credits,release_dates,videos`,
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
