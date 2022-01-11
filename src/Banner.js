import React,{  useState,useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const[movie, setMovie] = useState([]);  //for the random movie
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1 ) // for a random movie in thhe banner
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return (
        <header className='banner'
        style={{
            BackgroundSize: 'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                `,
                backgroundPosition: 'center center',
        }}
        >{/*<<<<<< Background Image  */}
            <div className='banner_content'>
            {/* TItle */}
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name} 
                {/* just a big if then statement */}
            </h1>
            {/* div> 2 buttons, play and mylist */}
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            {/* description */}
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>

            </div>
            <div className='banner--fadeBottom' />

            
        </header>
    )
}

export default Banner
