import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Footer.Wrapper>
      <div className='icons'>
        <i className='fa fa-facebook' />
        <i className='fa fa-instagram' />
        <i className='fa fa-twitter' />
        <i className='fa fa-youtube-play' />
      </div>
      <div className='terms'>
        <h4>Conditions of Use</h4>
        <h4>Privacy Policy</h4>
        <h4>Press Room</h4>
      </div>
      <div className='copy'>
      <h4>
      &copy; 2023 MovieBox by ol4juwon
      </h4>
      </div>
    </Footer.Wrapper>
  )
}
Footer.Wrapper = styled.footer`
width: 100%;
height: auto;
background-color: white;
padding: 10px 100px 0px 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
bottom: 0;
.copy{
  color: #6B7280;
}
.icons{
width: 20%;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-around;
}
.terms{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin: 10px 0;
  font-weight: 700;
  font-size: 16px;
  color: #111827;
}
@media not all and (min-width: 640px) {
 justify-content: center;
 padding: 10px;
 .icons, .terms {
  width: 100%;
 }
 .icons{
  justify-content: space-evenly;
 }

}
`
export default Footer