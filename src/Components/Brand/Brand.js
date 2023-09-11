import React from "react";
import { styled } from "styled-components";
import Logo from "../../assets/images/tv.png";
const Brand = () => {
  return (
    <Brand.Wrapper>
      <img src={Logo} alt="logo" />

      <h1>MovieBox</h1>
    </Brand.Wrapper>
  );
};
Brand.Wrapper = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  h1 {
    font-size: 24px;
    line-height: 24px;
    color: white;
  }
`;
export default Brand;
