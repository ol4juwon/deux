import React from 'react'
import { styled } from 'styled-components'

const SearchBar = () => {
  return (
    <SearchBar.Wrapper >
       
        <input className='input-field' placeholder='What do you want to watch?' prefix='' />
        <i className="fa fa-search icon"></i>
    </SearchBar.Wrapper>
  )
}
SearchBar.Wrapper = styled.div`
max-width: 525px;
width: 60%;
height: 36px;
border-radius: 6px;
    outline: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
.input-field {
    background: transparent;
    width: 100%;
    height: 36px;
    color: white;
    border-radius: 6px;
    padding-left: 10px;
    padding-right: 40px; /* Add space for the suffix icon */
  }
input::placeholder{
    color: white;
}
.icon{
color: white;
width: 20px;
margin: 0 5px;
}
`
export default SearchBar