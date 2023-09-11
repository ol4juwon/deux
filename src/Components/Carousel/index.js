import React from 'react'
import { styled } from 'styled-components'
import Poster from '../../assets/images/Poster.png';
const Slider = () => {
  return (
    <Slider.Wrapper>
        {/* <img src={Poster} alt="img"/> */}
    </Slider.Wrapper>
  )
}
Slider.Wrapper = styled.section`
width: 100%;
// max-height: 500px;
height: 600px;
background: url(${Poster});
background-size: 100% 100%;

`
export default Slider