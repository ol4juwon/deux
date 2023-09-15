import React from "react";
import { styled } from "styled-components";
import { Config } from "../../util/config";
import IMDBImg from "../../assets/images/imdb.png";
import RTImg from "../../assets/images/tomato.png";
import TrailerButton from "../TrailerButton";
const Slide = ({ data }) => {
  const image = `${Config.IMAGE_BASE_URL}${data.backdrop_path || data.poster_path}`;

  const formatTitle = (title) => {
    if(title?.length > 30){
    return `${title.substr(0,27)}...`
    }
    return title;
      }
  const formatDesc = (title) => {
    if(title?.length > 200){
    return `${title.substr(0,200)}...`
    }
    return title;
      }
  return (
    <Slide.Wrapper image={image}>
      <div className="box">
        <div className="title">
          <h1>{formatTitle(data.title || data.original_title || data.name)}</h1>
        </div>
        <div className="ratings">
          <div className="imdb">
            <img src={IMDBImg} alt="imdb" width={"6px"} height={"6px"} />
            <span>{data.vote_average? Number(data.vote_average).toPrecision(2) * 10 : 0}/100</span>
          </div>

          <div className="tomato">
            <img src={RTImg} alt="tomato"></img>
            <span>{data.popularity.toFixed(0)}%</span>
          </div>
        </div>
        <div className="desc">
          {formatDesc(data?.overview)}
        </div>
        <div className="btn">
          <TrailerButton />
        </div>
      </div>
    </Slide.Wrapper>
  );
};
Slide.Wrapper = styled.section`
  height: 600px;
  width: 100%;
  background:  linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
  background-image:url(${(props) => props.image});
  background-size: 100% 600px;
  background-attachment: fixed;
  padding: 8%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  word-wrap: break-word;
  .desc{
    text-align: left;
    text-justify: left;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 15px;
  }
  .box {
    width: 400px;
    height: 300px;
    gap: 16px;
    // background: #00000030;
    div {
      justify-content: flex-start;
    }
    h1 {
      font-size: 48px;
      line-height: 54px;
      text-align: left;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .ratings {
      height: auto;
      margin-bottom: 15px;

      // img{
      //     width: 35px;
      //     height: 17px;
      // }
      .imdb {
        img {
          height: 25px;
          width: 70px;
          margin-right: 10px;
          aspect-ratio: 2/1;
        }
      }
      .tomato {
        display: relative;
        img {
          height: 25px;
          width: 25px;
          aspect-ratio: 1/3;
          margin-right: 10px;
        }
        justify-content: right;
      }
      div {
        width: 50%;
        flex-direction: row;
        display: flex;
      }
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export default Slide;
