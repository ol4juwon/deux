import React from "react";
import { styled } from "styled-components";
import CardImg from "../../assets/images/cardd.png";
import IMDBImg from "../../assets/images/imdb.png";
import RTImg from "../../assets/images/tomato.png";
import { useHistory } from "react-router-dom";
import { Config } from "../../util/config";
const Card = ({data}) => {
  const history = useHistory();
  const image = `${process.env.REACT_APP_IMAGE_BASE_URL || Config.IMAGE_BASE_URL}${data.poster_path}`;
  const title = data.title || data.name;
  const formatTitle = (title) => {
if(title.length > 40){
return `${title.substr(0,40)}...`
}
return title;
  }
  return (
    <a href={`/movies/${data.id}`}>
      <Card.Wrapper data-testid="movie-card" image={image}>
        <img data-testid="movie-poster" src={image} alt={data.title} className="movie-poster" />
        <div className="flex w-full justify-between px-3 pt-3">
          <div className={`text-red ${data?.first_air_date ? "" : "invisible"} text-red-700 text-xs series p-2 text-bold`}>
            TV SERIES
          </div>
          <div className="icon-container justify-center items-center rounded-full bg-slate-300">
            <i className="fa fa-heart icon  text-slate-300"></i>
          </div>
        </div>
        <div className="details">
         <div className="date">
         <h4>USA,{" "}</h4> <h4 data-testid="movie-release-date"> {data?.release_date?.split("-")[0] || data?.first_air_date?.split("-")[0]}</h4>
          
          </div> 
          <h2 data-testid="movie-title">{formatTitle(title)}</h2>
          <div className="ratings">
            <div className="imdb">
              <img src={IMDBImg} alt="imdb" width={"35rem"} height={"17rem"} />
              <span>86.0/100</span>
            </div>

            <div className="tomato">
              <img src={RTImg} alt="tomato"></img>
              <span>97%</span>
            </div>
          </div>
          <h3>Action</h3>
        </div>
      </Card.Wrapper>{" "}
    </a>
  );
};
Card.Wrapper = styled.div`
.movie-poster{
  z-index: 0;
  display: none;
}
.date{
  width: 100%;
  display: flex;
  flex-direction: row;
}
height: 450px;
// margin-horizontal: 40px;
// width: 250px;
// width: 20%;
// min-width: 200px;
background-color: grey;
background: url(${props => props.image});
background-size: 100% 70%;
background-repeat: no-repeat;
// border:1px solid red;
display: flex;
flex-direction: column;
justify-content: space-between;
.imdb, .tomato {
    width:50%;
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
        margin-right: 0.5rem;
    }
}
.details{
    width: 100%;
    height: 30%;
    padding-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    h2{
        color: #111827;
        font-weight: bold;
        font-size: 18px;
    }
    h4{
        font-size: 12px;
        font-weight: bold;
        color: #9CA3AF;
    }
    .tomato{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: end;
    }
    h3{
        color: #9CA3AF;
    }
    span{
        font-size: 12px;
        line-height: 12px;
    }
    .ratings{
        height: auto;
        // img{
        //     width: 35px;
        //     height: 17px;
        // }
        div{
            width: 50%;
            flex-direction: row;
            display: flex;
        }
        width:100%;
        display: flex;
        flex-direction: row;
        // background-color: red;
    }
}
.series{
    background-color:#F3F4F680;
    color: black;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
}
.icon{
    color: rgb(203 213 225 1);
    text-size: 12px;
};
    // border: 1px solid red;
    // padding: 5px;
    // justify-content: center;
    // border-radius: 50%;
}
.icon-container{
    padding: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    background: #F3F4F680;
    // border: 1px solid red;

}
`;
export default Card;

// Aghs-s11