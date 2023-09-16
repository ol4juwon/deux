import React from "react";
import { styled } from "styled-components";
import Logo from "../../assets/images/tv.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Brand = ({color}) => {
  const history  = useHistory();
  return (
    <Brand.Wrapper color={color} onClick={() => history.push('/')}>
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
    color: ${props=> props.color? props.color : "white" };
  }
`;
export default Brand;
