//Header.js
import { Link } from 'react-router-dom';

function Header (){
     return(
          <Link to="/">
               <h1>Hackflix</h1>
          </Link>
     )
}

export default Header;

//build out Header function with the <h1> inside

//ONCE YOU HAVE THE GALLERY SECTION WORKING, AND CLICKING MOVIE POSTERS BRING YOU SEPARATE URLS
//import link so you can have the h1 clickable
//wrap the link component around the h1
//add the to="/" attribute - the single slash will mean it will link back to the homge page