import React, { useState } from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie.js";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
     
     <Route exact path = "/" component = {MovieList} />

     {/*: tells react router to parse out that portion of the url and give it to me as a value inside of the 
          params object inside of match */}
     <Route path = "/movies/:id" component = {Movie}/>

    </div>
  );
};

export default App;
