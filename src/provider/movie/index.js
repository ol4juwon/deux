import React, { useState } from "react";
import { useGetTopTenQuery, useSearchMoviesQuery } from "../../redux/services/movie-service";

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const { data: topTenMovies, isLoading: isLoadingTopTen, error: topTenError } = useGetTopTenQuery();
  const { data: searchResults, isLoading: isLoadingSearch, error: searchError } = useSearchMoviesQuery();
  const [error, setError] = useState();
  return (
    <>
      {children({
        topTenMovies,
        isLoadingTopTen,
        topTenError,
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
      })}
    </>
  );
};

export default MovieProvider;
