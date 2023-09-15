import React from "react";
import { styled } from "styled-components";
import loaderImg from "../assets/images/Walk.gif";
import Navbar from "../Components/Navbar/Navbar";
import {
  useGetTopTenQuery,
  // useSearchMoviesQuery,
} from "../redux/services/movie-service";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Carousel";
import Featured from "../Components/Featured";
const Home = () => {
  const {
    data: topTenMovies,
    isLoading: isLoadingTopTen,
    // error: topTenError,
  } = useGetTopTenQuery();
  // const [searchMovies]= useSearchMoviesMutation();
  // console.log(topTenMovies);
  return (
    <Home.Wrapper>
      <Navbar />
     <Slider data={topTenMovies} /> 
    <Featured data={topTenMovies} isLoading={isLoadingTopTen} />
      {isLoadingTopTen ? (
        <div className="loader-container">
          <div className="loader-container-inner">
            <img src={loaderImg} alt="loader" className="spin-loader" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer /> 
    </Home.Wrapper>
  );
};

export default Home;
Home.Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  // background-color: black;
  padding-bottom: 100px;
`;
