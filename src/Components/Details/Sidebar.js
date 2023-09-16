import React from "react";
import { styled } from "styled-components";
import Brand from "../Brand/Brand";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/tv.png";
import Projector from "../../assets/images/TV Show.png";
import Movie from "../../assets/images/Movie.png";
import CalendarIcon from "../../assets/images/Calendar.png";
import HomeIcon from "../../assets/images/Home.png";
import LogoutIcon from "../../assets/images/Logout.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Sidebar = () => {
  const history = useHistory();
  return (
    <Sidebar.Wrapper className="flex w-[222px] max-sm:h-10 py-10 justify-between items-center md:block  font-bold  rounded-tr-2xl">
      {/* <Link to={"/"}> */}
      <div
        onClick={() => {
          history.push("/");
        }}
        className="flex items-center px-6 md:mb-10 md:pt-4"
      >
        <img src={Logo} alt="logo" className="w-10" />
        <h1 className="ml-2 max-md:invisible"> Movie Box</h1>
      </div>
      {/* </Link> */}
      <div className="flex md:block text-gray-400">
        <div className="items-center menu-item active flex md:mb-10">
          <img src={HomeIcon} alt="home" className="w-7 ml-3 md:ml-0 md:w-10" />
          <p className="hidden md:flex ml-2">Home</p>
        </div>

        <div className="items-center menu-item flex md:mb-10">
          <img src={Movie} alt="home" className="w-6 ml-3 md:ml-1 md:w-8" />
          <p className="hidden md:flex ml-3">Movies</p>
        </div>
        <div className="items-center menu-item flex md:mb-10">
          <img
            src={Projector}
            alt="home"
            className="w-7 ml-3 md:ml-0 md:w-10"
          />
          <p className="hidden md:flex ml-2">TV Series</p>
        </div>
        <div className="items-center menu-item flex md:mb-10">
          <img
            src={CalendarIcon}
            alt="home"
            className="w-7 ml-3 md:ml-0 md:w-10"
          />
          <p className="hidden md:flex ml-2">Upcoming</p>
        </div>
        <div className="hidden mx-6 md:block bg-movieRed bg-opacity-10 rounded-lg w-44 p-3 border border-movieRed mb-4 mt-4 mb-10">
          <p className="text-black">Play movie quizzes and earn free tickets</p>
          <p className="text-xs mt-2 ">50k people are playing now</p>
          <button className="bg-movieRed bg-opacity-10 text-sm border border-movieRed first-line:text-movieRed rounded-full px-2 py-1 mt-2">
            Start playing
          </button>
        </div>

        <Link className="mx-10" to={"/"}>
          {" "}
          <div className="items-center flex">
            <img
              src={LogoutIcon}
              alt="logout"
              className="w-7 ml-3 md:ml-0 md:w-10"
            />
            <p className="hidden md:flex ml-2">Logout</p>
          </div>
        </Link>
      </div>
    </Sidebar.Wrapper>
  );
};
Sidebar.Wrapper = styled.nav`
  // height: 100%;
  // width: 220px;
  // padding:1rem;
  // display: flex;
  // flex-direction: column;
  //  background: #BE123C10;
  border: 1px rgba(0, 0, 0, 0.3) solid;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  .active {
    border-right-width: 4px;
    border-right-color: #be123c;
   background: #BE123C10;

  }
  .menu-item{
    padding: 0 20px;
  }
  // .fa{
  //   font-size: 25px;
  // }
  @media not all and (min-width: 640px) {
    border: none;
  }
`;
export default Sidebar;
