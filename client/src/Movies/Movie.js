import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Movie = (props) => {
 // const [movie, setMovie] = useState({});

  //changed this to (null) to fix TypeError: Cannot read property 'map' of undefined
  //so the if (!movie) statement below can be set to true
  const [movie, setMovie] = useState(null);
 
  useEffect(() => {
    //const id = 1;
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);//put any variables used in the useEffect in this array
  
  // Uncomment this only when you have moved on to the stretch goals
  //const saveMovie = () => {
    //const addToSavedList = props.addToSavedList;
    //addToSavedList(movie);
  //}

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {/*********************STRETCH*****************************/}
      <div onClick = {(event)=> {
        event.preventDefault();
        props.addToSavedList(movie);
        }} className="save-button"> Save </div>

    </div>
  );
}

export default Movie;
