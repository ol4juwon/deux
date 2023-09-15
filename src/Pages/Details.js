import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";
import { useSingleMovieQuery } from "../redux/services/movie-service";
import Sidebar from "../Components/Details/Sidebar";
import Main from "../Components/Details/Main";
import Loader from "../Components/HOC/loader";

const Details = (props) => {
  // const history = useHistory();
  const { match } = props.data;
  const params = match.params;
  const { data, isLoading, isError } = useSingleMovieQuery(params);
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [usCertification, setUsCertification] = useState("");
  const [formattedRuntime, setFormattedRuntime] = useState("");
  console.log(data?.release_date?.split("-")[0], data);
  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minutes: "2-digit",
      seconds: "2-digit",
      milliseconds: "2-digit",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };
  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}mins`;
    } else if (remainingMinutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h${remainingMinutes}mins`;
    }
  }
  return isLoading ? (
    <Loader />
  ) : (
    <Details.Wrapper>
      <Sidebar />
      <div className="container rounded-2xl">
        <div className="top h-1/2 rounded-2xl bg-blue-500">
          <iframe
            className="w-full h-full rounded-2xl bg-blue-500"
            src={`https://www.youtube.com/embed/${data?.videos?.results[0]?.key}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            title="trailer"
          ></iframe>
        </div>
        <div className="bottom ">
          <div className="title mb-4">
            <div className="w-1/2 h-auto ">
              <h3>
                {data?.title || data?.name} <span>•</span>
                {data?.release_date
                  ? data?.release_date?.split("-")[0]
                  : data?.first_air_date?.split("-")[0]}
                <span>•</span>
                {data?.adult ? "18" : "PG-13"}
                <span>•</span>
                {formatTime(data?.runtime)}
              </h3>
            </div>
            <div className="w-1/2 h-full flex-row flex justify-between" >
              <div>
                <span className="genre text-red-400">action</span>
                <span className="genre text-red-400">drama</span>
              </div>
              <div className="flex flex-row"> 
              
                <h5 className="rate">  <i className="fa fa-star text-yellow-400" />{data?.vote_average}</h5>
                <span>|</span>
                <h5>350k</h5>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="overview w-4/6">
              <p>{data?.overview}</p>
              <h4>Director:<span className="crew">{data?.credits?.crew[0]?.name}</span></h4>
              <h4>Writer: <span className="crew">{data?.credits?.crew[0]?.name}</span></h4>
              <h4>Stars:<span className="crew">{data?.credits?.cast[0]?.name}</span> </h4>
              <div className="nom">
              <i className="prefix" >Top rated movie #65s</i>
                <select><option>Awards: 9 nominations</option></select>
                

              </div>
            </div>
            <div className="w-2/6 h-full ">
              <div className="w-full flex flex-col">
                <div className="tix self-center">
                  <i className="fa fa-ticket" />
                  <span>See Showtimes</span>
                </div>
                <div className="watch self-center">
                  <i className="fa fa-list" />
                  <span>More watch options</span>
                </div>
              </div>
              <div>
                <img />
              </div>
              <div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Details.Wrapper>
  );
};

Details.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  .genre{
    border-radius: 12px;
    padding: 2px 4px;
    text-color: #B91C1C;
    border: 1px solid #F8E7EB;

  }
  .fa{
    margin: 5px;
  }
  .rate{
    color: #E8E8E8;
  }
  .tix, .watch{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tix{
    background:  #B91C1C;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    margin: 5px auto;
  }
  .watch{
    background:  #B91C1C30;
    color: black;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid #B91C1C;
    margin: 5px auto;

  }
  .crew{
    color: #B91C1C;
    margin: 0px 14px;
  }
  .overview {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nom{
      background-color: white;
      display: flex;
      border-radius: 5px;
      border: 1px solid grey;


      width: 98%;
      flex-direction: row;
      i{
        width: 40%;
        border-radius: 5px;
        background-color: #B91C1C;

      }
      select{
        background-color:white;
        color: black;
        width: 60%;
        // margin: 0 10px;
        padding: 0 15px 0 15px;
        padding-right: 25px;
        border-radius: 5px;

      }

    }

  }
  .top {
    width: 100%;
  }
  .bottom{
    padding-top: 20px;
    width: 100%;
    height: 50%;
    span{
      margin:0 2px;
      // color: black;
    }
  }

  .title{
    height: auto;
    width: 100%;
    // background-color: red;
    display: flex;
    flex-direction: row;
    h3{
      justify-content: center;
      align-items: center;
    }

  }
  .details {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: row;

    // background-color: blue;
  }
  .info{
    width: 100%;
    height: 100%;
  }
  .container {
    padding: 2rem;
    width: 100%;
    height: 100%;
    // background-color: rgba(187, 247 ,208, 0.5 );
  }
  }
`;
export default Details;

{
  /* <div className="top h-1/2 rounded-2xl bg-blue-500">
<iframe
  className="w-full h-full rounded-2xl bg-blue-500"
  src={`https://www.youtube.com/embed/${data?.videos?.results[0].key}`}
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
  title="trailer"
></iframe>
</div> */
}
