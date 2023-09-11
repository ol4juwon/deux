import React from 'react'
import { styled } from 'styled-components'
import Card from '../Card'

const Featured = () => {
  return (
    <Featured.Wrapper>
        <div className=' w-full flex flex-row justify-between items-center'>
        <h1 className='text-4xl text-black font-bold'>
            Featured Movie
        </h1>

        <span className='text text-red-700 text-lg font-extralight'>see more {">"}</span>
        </div>
        <div className='w-full mt-5 h-auto flex flex-row justify-between items-center'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    </Featured.Wrapper>
  )
}
Featured.Wrapper = styled.section`
width: 100%;
height: 600px;
// background-color: red;
margin-top: 10px;
padding: 40px 8%;

`
export default Featured