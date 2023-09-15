import React from 'react'
import { styled } from 'styled-components'
import Card from '../Card'
import Loader from '../HOC/loader'

const Featured = ({data, isLoading}) => {
  return (
    <Featured.Wrapper>
        <div className='mb-10 w-full flex flex-row justify-between items-center'>
        <h1 className='text-4xl text-black font-bold'>
            Featured Movie
        </h1>

        <span className='text text-red-700 text-lg font-extralight'>see more {">"}</span>
        </div>
        <div className='grid grid-cols-4 grid-rows-3 gap-y-8 gap-x-8' >
            {data?.results?.map((item, index) => <Card data={item} key={index}/>)}
            {isLoading && <Loader />}
        </div>

    </Featured.Wrapper>
  )
}
Featured.Wrapper = styled.section`
width: 100%;
// height: 600px;
// background-color: red;
margin-top: 10px;
padding: 40px 8%;

`
export default Featured