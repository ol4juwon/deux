import React from "react";
import { styled } from "styled-components";
import Brand from "../Brand/Brand";
import SearchBar from "../SearchBar";
import SignInMenu from "../SignIn";

const Navbar = () => {
  return (
    <Navbar.Wrapper>
      <Brand />
      <SearchBar />
      <SignInMenu />
    </Navbar.Wrapper>
  );
};
Navbar.Wrapper = styled.nav`
  height: 80px;
  width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // background: red;
  z-index: 10;
  padding: 0 8%;
`;
export default Navbar;
