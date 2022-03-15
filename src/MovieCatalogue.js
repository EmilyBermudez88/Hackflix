//MovieCatalogue.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieCatalogue(){

    // **** always good to throw console logs in just to see when things are rendered and what happens as app is rendered and interacted with *****
    console.log('catalogue is rendered');

     // initialize state to keep track of movie data which will be returned from API 
    const [movies, setMovies] = useState([])

    useEffect(()=> {

        console.log('side effect is running')
          //call axios, pass it an object:
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '8cdf2e1c44bd3c6639e1b72220d3a1f2',
                include_adult: false
            }
        }).then( (response)=> {
            console.log(response.data);
            setMovies(response.data.results)
        })

    }, []);
    
    return(
        <main>
            <h2>SHOW ME THE MOVIES!</h2>
            <ul className="catalogue">
                {
                movies.map((movie)=> {
                        return(
                            // the key prop goes on the top most element that holds the rest of the information (inside a function call it's just one of many attributes passed)
                            //we want to make sure the posters are clickable and navigate to a unique URL to represent each specific movie
                            <Link to={`/${movie.id}`}>
                                {/* good to use id above in link, because movie titles may not be unique enough, and will have spaces in titles */}
                                <li key= {movie.id}>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={`Poster of ${movie.original_title}`} />
                                    {/* <h4>{movie.title}</h4> */}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </main>

    )
}

export default MovieCatalogue;

// 1. import axios and the hooks from react
// 2. initialize state to keep track of movie data returned from API (here we are going to initialize useState as empty because we don't kno what the data from the API looks like)
// 3. make API axios call, wrapped in useEffect - to run side effect of fetching data from movie API
     //side effect is only running single time on page load 
     //anonymous function is usually fine 
//4. save returned data within state (change useState({}) to useState([]) because we can now see it returns an array)
    //we can't make it completely blank, because useEffect only renders AFTER the rest of the component is fully rendered- but inside the return() there is a .map() method- when the array was empty in state, that was ok, but if there is nothing (or null) then it will throw an error because .map() can't iterate something that doesn't exist (to be clear, an empty array DOES exist and you can iterate through technically)
//5. use .map() to loop over the array to put items on the page 

//6. now make the <li>s clickable!
    //so need to wrap it in a <Link> component
    //inside the <Link> component, need to add the attribute 'to=' to define what the URL will be 
//7. in order to have something render on the URL pages we click to, we need to define it inside App.js in the ROUTES

//8. after doing what needs to be done in App.js, and SECOND axios call is constructed inside Movie.js, we need to pass down the movie.id that we clicked, so it can be added to the url for the axios call
    //8a. 
