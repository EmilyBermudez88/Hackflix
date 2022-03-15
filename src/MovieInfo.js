//MovieInfo.js
import axios from 'axios';
import { useState, useEffect } from 'react';

//in order to grab information from a URL (when using Router) we can use the useParams hook
import { useParams } from 'react-router-dom';

function MovieInfo(){

     //console.log useParams to check it out- it's an object!
     // console.log(useParams());

     //call useParams Hook and see what it returns:
     const {movieId : movie_id} =useParams();

     //initialize state to represent the movie details which will be returned to us from the API
     const [details, setDetails] = useState({});

     //define side effect which will fetch data about the movie after the component has first rendered
          //use axios to make request to movie id endpoint 
     useEffect(()=> {
          axios({
               url: `https://api.themoviedb.org/3/movie/${movie_id}`,
               params: {
                    api_key: '8cdf2e1c44bd3c6639e1b72220d3a1f2'
               }
          }).then((movieResponse)=> {
               setDetails(movieResponse.data);
               console.log(details);
          })
     }, []);

     return(
          <section className="poster">
               <div className="description">
                    {/* render movie tagline, summary  */}
                    <h3>{details.tagline}</h3>
                    <h2>{details.title}</h2>
                    <p>{details.overview}</p>
               </div>
               <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}  alt={`a movie poster for ${details.original_title}`} />
               </div>
          </section>

          
     )
}

export default MovieInfo;

//HOW THE AXIOS CALL WAS MADE 
     //with react, we can use the url to help us pass props - we want to use the movie ID (currently stored inside the browser URL) and take that unique identifier and pass it into the axios call 
     //we import a new hook called 'useParams' - first console.log it to see what is going on with it
          //useParams returns an object: in this case, it pulls the uniqueIdentifier we defined as :movieId inside the <Route> in App.js, and turn it into a key-value pair - so it returns Object {movieID: "434314"} (or any id number)
     //call useParams hook and extract the movieId property - use destructuring here and rename it to movie_id because that is what the API call is asking for