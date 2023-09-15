import React from "react";
import { styled } from "styled-components";

const TrailerButton = () => {
  return (
    <TrailerButton.Wrapper>
      <button className="btnfield">
        <div className="circle">
          <i className="fa fa-play icon"></i>
        </div>
        <span>Watch trailer</span>

      </button>
    </TrailerButton.Wrapper>
  );
};
TrailerButton.Wrapper = styled.div`
  width: 170px;

  .btnfield {
    width: 170px;
    color: #be123c;
    padding: 5px 20px;
    background-color: #be123c;
    color: #fff;
    border: none;
    border-radius: 5px;
    display: flex;
    cursor: pointer;
  }

  .icon {
    margin-right: 10px;
  }
  .circle {
    position: relative;
    color: red;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    // padding: 5px;
  }

  .fa {
    padding-left: 6px;
    color: #be123c !important;
  }
  span {
    color: white;
    text-transform: capitalize;
    width: 400px;
    font-size: 14px;
  }
`;
export default TrailerButton;
