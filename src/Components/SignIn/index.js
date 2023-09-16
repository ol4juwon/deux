import React from "react";
import MenuIcon from "../../assets/images/Menu.svg";
import { styled } from "styled-components";
const SignInMenu = ({color}) => {
  return (
    <SignInMenu.Wrapper color={color}>
      <h2 className="h2">Sign In</h2>
      <img src={MenuIcon} alt="menu" />
    </SignInMenu.Wrapper>
  );
};
SignInMenu.Wrapper = styled.div`
  display: flex;
  width:20%;
  max-width: 115px;
  height: 36px;
  align-items: center;
  justify-content: space-between;
  .h2 {
    color: ${props => props.color? props.color: "white"};
  }
  img {
    width: 36px;
    height: 36px;
  }
`;
export default SignInMenu;
