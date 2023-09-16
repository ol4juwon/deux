import React, { useState } from "react";
import { styled } from "styled-components";
import { useSearchMoviesMutation } from "../../redux/services/movie-service";
import Card from "../Card";
import { useHistory } from "react-router-dom";

const SearchBar = ({color}) => {
  const history = useHistory();
 const [searchMovies] =  useSearchMoviesMutation();
 const [searchText, setSearchText] = useState();
 const [results, setResults] = useState([]);
 const [show, setShow] = useState(false);
 const handlePress = async (e) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    // Perform your action here, e.g., trigger a search
    console.log('Enter key pressed');
    setShow(false);
    history.push(`/search/${searchText}`);
  }


 }
 const handleOut = (e) => {

 }

 const handleChange = async(e) => {
  setShow(false);
setSearchText(e.target.value)
const response = await  searchMovies({keyword: e.target.value});
setResults(response.data.results);
setShow(true);
 }

 const handleSearch = () =>{
  history.push(`/search/${searchText}`);
 }
  return (
    <SearchBar.Wrapper className="flex max-sm:hidden max-md:hidden max-lg:hidden" color={color}>
      <input
        className="input-field max-md:hidden "
        placeholder="What do you want to watch?"
        prefix=""
        value={searchText}
        onChange={handleChange}
        onKeyUp={handlePress}
        
      >

      </input>
      <i className="fa fa-search icon" onClick={handleSearch}></i>
      {show && results.length > 0 && <div className="results grid grid-cols-4 gap-x-10 grid-rows-1">
      {results.length > 0 && setShow &&  results.map((item, index) => index < 4 && <Card key={index} data={item} />)}
      </div>}
    </SearchBar.Wrapper>
  );
};
SearchBar.Wrapper = styled.div`
  max-width: 525px;
  width: 60%;
  // display: none;
  height: 36px;
  border-radius: 6px;
  outline: 1px solid ${props => props.color? props.color: "white"};
  align-items: center;
  justify-content: space-between;
  .input-field {
    background: transparent;
    width: 100%;
    height: 36px;
    color: ${props => props.color? props.color: "white"};
    border-radius: 6px;
    padding-left: 10px;
    padding-right: 40px; /* Add space for the suffix icon */
  }
  input::placeholder {
    color:${props => props.color? props.color: "white"};
  }
  .icon {
    color: ${props => props.color? props.color: "white"};
    width: 20px;
    margin: 0 5px;
  }
  .results{
    position: absolute;
    top: calc(80%   );
    background: #ffffff40;
    width: 80%;
    margin: 0 auto;
    // height: 269px;
    z-index: 10;
  }
`;
export default SearchBar;
