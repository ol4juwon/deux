import React from "react";
import { styled } from "styled-components";

const Main = ({ data }) => {
  return (
    <Main.Wrapper>
      <div className="trailer"></div>
      <div className="details">
<div className="left">
<div className="w-full h-full relative">
  <div className="left-0 top-0 absolute"><span className="">Top Gun: Maverick</span><span className="">
   • 
  </span><span className=" ">2022</span><span className="">
   • 
  </span><span className="">PG-13</span><span className="">
   • 
  </span><span className="text-neutral-700 text-2xl font-medium font-['Poppins']">2h 10m</span></div>
  <div className="w-20 h-7 left-[532px] top-[3px] absolute rounded-2xl border border-pink-100"></div>
  <div className="w-20 h-7 left-[627px] top-[3px] absolute rounded-2xl border border-pink-100"></div>
  <div className="left-[549px] top-[6px] absolute text-red-700 text-base font-medium font-['Poppins']">Action</div>
  <div className="left-[642px] top-[6px] absolute text-red-700 text-base font-medium font-['Poppins']">Drama</div>
  <div className="left-0 top-[60px] absolute text-zinc-800 text-xl font-normal font-['Poppins']">After thirty years, Maverick is still pushing the envelope as a top naval aviator,<br/>but must confront ghosts of his past when he leads TOP GUN's elite graduates<br/>on a mission that demands the ultimate sacrifice from those chosen to fly it.</div>
</div>
<div className="w-96 h-44 relative">
  <div className="left-[6px] top-[16px] absolute"><span className="text-zinc-800 text-xl font-normal font-['Poppins']">Director :</span><span className="text-white text-xl font-normal font-['Poppins']"> </span><span className="text-rose-700 text-xl font-normal font-['Poppins']">Joseph Kosinski</span></div>
  <div className="left-[6px] top-[77px] absolute"><span className="text-zinc-800 text-xl font-normal font-['Poppins']">Writers :  </span><span className="text-rose-700 text-xl font-normal font-['Poppins']">Jim Cash, Jack Epps Jr,  Peter Craig</span></div>
  <div className="left-[6px] top-[138px] absolute"><span className="text-zinc-800 text-xl font-normal font-['Poppins']">Stars
  : </span><span className="text-rose-700 text-xl font-normal font-['Poppins']">Tom Cruise, Jennifer Connelly, Miles Teller</span></div>
</div>
<div className="w-96 h-14 relative">
  <div className="w-96 h-14 left-0 top-0 absolute bg-white bg-opacity-80 rounded-lg border border-stone-300"></div>
  <div className="w-64 h-14 left-0 top-0 absolute bg-rose-700 rounded-lg"></div>
  <div className="left-[20px] top-[13px] absolute text-white text-xl font-medium font-['Poppins']">Top rated movie #65</div>
  <div className="left-[277px] top-[13px] absolute text-zinc-800 text-xl font-medium font-['Poppins']">Awards
   9 nominations</div>
  <img className="w-7 h-7 left-[729px] top-[13px] absolute" src="https://via.placeholder.com/30x30" alt="ss"/>
</div>
</div>
<div className="right">
<div className="w-96 h-44 relative">
  <div className="w-36 h-9 left-[216px] top-0 absolute">
    <img className="w-7 h-7 left-0 top-[3px] absolute" alt="d"src="https://via.placeholder.com/30x30" />
    <div className="left-[39px] top-0 absolute"><span className="text-gray-200 text-2xl font-medium font-['Poppins']">8.5 </span><span className="text-stone-500 text-xl font-medium font-['Poppins']">| 350k</span></div>
  </div>
  <img className="w-9 h-9 left-[51px] top-[2px] absolute opacity-50"  alt=""src="https://via.placeholder.com/35x35" />
  <img className="w-9 h-9 left-[106px] top-[2px] absolute opacity-50" alt="" src="https://via.placeholder.com/35x35" />
  <img className="w-9 h-9 left-[161px] top-[2px] absolute opacity-50" alt="" src="https://via.placeholder.com/35x35" />
  <div className="w-96 h-14 left-0 top-[62px] absolute">
    <div className="w-96 h-14 left-0 top-0 absolute bg-rose-700 rounded-lg"></div>
    <div className="left-[121px] top-[13px] absolute text-white text-xl font-medium font-['Poppins']">See Showtimes</div>
    <img className="w-6 h-6 left-[86px] top-[15px] absolute shadow" alt="" src="https://via.placeholder.com/25x25" />
  </div>
  <div className="w-96 h-14 left-0 top-[129px] absolute">
    <div className="w-96 h-14 left-0 top-0 absolute bg-rose-700 bg-opacity-10 rounded-lg border border-rose-700"></div>
    <img className="w-6 h-6 left-[63px] top-[17px] absolute" alt="dd"src="https://via.placeholder.com/23x23" />
    <div className="left-[98px] top-[13px] absolute text-zinc-800 text-xl font-medium font-['Poppins']">More watch options</div>
  </div>
</div>
</div>




      </div>
    </Main.Wrapper>
  );
};
Main.Wrapper = styled.div`
  flex: 1;
  // background: #ff7100;
  padding: 20px 30px;
  .trailer {
    width: 100%;
    height: 48vh;
    background: black;
    border-radius: 20px;
  }
  .details {
    width:100%;
    display: flex;
    height: 48%;
    flex: 1;
    flex-direction: row;
    .left{
      width: 60%;
      background-color: red;
    }
    .right{
      width: 40%;
      background-color: blue;

    }
    // background: #ff7100;
  }
`;

export default Main;
