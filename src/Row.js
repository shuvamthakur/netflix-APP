import React, { useState,useEffect } from 'react';
import axios from './axios';
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title,fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //A snippet of code which runs based on a specific condition
    useEffect(() => {
        // when the row is loading, we need to be able to get all the movie data rfrom tmdb
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // await will make this wait for the promise to come back that is the object requested
            // console.log(request);
            setMovies(request.data.results);
            //check the data coming back
            return request;
        }
    fetchData();
    },[fetchUrl]); //if brackets at the end blank then run once when row laods and dont run again. if there is a variable, then everytime the variable changes, it is run 
// Whenever you have an variable from another scope being used, you need to add it in the last bracket cuz it is dependent on it, everytime it changes, we need to change the row thing 

    const opts= {
        height:"390",
        width:"100%",
        playerVars: {
            autoplay:1,
        }
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
            // set the trainer url as empty if already open(trainerurl is full)
        } else {
            movieTrailer(movie?.name || "" )
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));

            })
            .catch((error) => console.log(error));
        }
    };


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {/*several row_poster*/}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    // this is an optimization trick where react allows us to not render all the things but only render what has changed so the variable is element of  a list and this line tells us not to render the whole list all the time
                    // so in our app we can see the first render is a bit slow but then it just smoothens out🤯🤯
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
                ))}
{/* map basically just iterates through the object goes through every. so this functions say basically for every movie object return me an image */}
{/*  */}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            {/* youtube embed for the underneath trailer */}


            {/*container->posters*/}

        </div>
    )
}

export default Row
