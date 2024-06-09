import { useEffect, useState } from 'react';
import RowItem from '../RowItem/RowItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Row.css';
import axios from "../../API/axios";

function Row({title, fetchURL, id}) {
    const[movies,setMovies] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        console.log(movies);
    }, [fetchURL]);


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider-arrow-left'>
                <span>
                <ArrowBackIosIcon/>
                </span>
            </div>
            <div className='row-posters'>
                {movies.map((movie) => (
                    <RowItem key={movie.id} movie={movie}/>
                ))}
            </div>
            <div className='slider-arrow-right'>
                <span
                onClick={() => (document.getElementById(id).scrollLeft += window.innerWidth -50) }
                >
                <ArrowForwardIosIcon/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Row