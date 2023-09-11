import React from 'react'
import { styled } from 'styled-components'
import CardImg from '../../assets/images/cardd.png'
const Card = () => {
  return (
    <Card.Wrapper>
        <div className='flex w-full justify-between px-3 pt-3'>
        <div className='text-red text-red-700 text-xs series p-2 text-bold'>TV SERIES</div>
        <div className='icon-container justify-center items-center rounded-full bg-slate-300'>
        <i className='fa fa-heart icon  text-slate-300'></i>
        </div>
        </div>
     
        
    </Card.Wrapper>
  ) 
}
Card.Wrapper = styled.div`
height: 490px;
margin-horizontal: 40px;
max-width: 250px;
width: 20%;
min-width: 200px;
background-color: grey;
background: url(${CardImg});
background-size: 100% 70%;
background-repeat: no-repeat;
border:1px solid red;
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
`
export default Card