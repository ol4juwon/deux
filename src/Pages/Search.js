import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import { styled } from 'styled-components'
import { useSearchMoviesMutation } from '../redux/services/movie-service';
import Loader from '../Components/HOC/loader';
import Card from '../Components/Card';
import { Skeleton } from 'antd';

const SearchPage = (props) => {
    const { match } = props.data;
    const params = match.params;
    console.log({params});
const [movies, setMovies] = useState();
const [isLoading, setisLoading] = useState(true);
    const [searchMovies] = useSearchMoviesMutation();
    const find = () => {
        
    }
    useEffect(() => {

        if(params?.query){
            setisLoading(true)
                 searchMovies(params.query).then(res => {setMovies(res.data.results);
                console.log('reeal', res)
                }).catch(err => err);
                setisLoading(false);
        }
    },[params.query])
  return (
    <SearchPage.Wrapper>

    <Navbar color={"black"} />
    {isLoading && <div className='w-full h-full flex px-10  justify-center items-center'>
        <Skeleton active className=''/>
        </div>}
        {!isLoading && movies?.length> 0 && <div className='grid mt-20 px-20 grid-rows-4 grid-cols-4 gap-4'>
        {movies.map((item, index) => <Card key={index} data={item} />)}
        </div>}
    </SearchPage.Wrapper>

  )
}
SearchPage.Wrapper = styled.div`
width: 100vw;
height: 100vh;
flex-direction :column;
display: flex;
margin: 0;
// padding: 8%;

`

export default SearchPage