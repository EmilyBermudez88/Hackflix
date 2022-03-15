import './index.css';
//import 2 pieces from router library which allows us to configure the routes within the app - named exports need to be in {} 
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      {/* because this is outside of the Routes, it means Header will be available at all url addresses within the app */}
      <Header />

      {/* 1. define Routes (routing configuration*/}
      <Routes>
        {/* Step2: define individual Routes / URL paths - what component is available at which path */}
          {/* in this case, by just using the /, means it will be available only at home page */}
        <Route path="/" element={ <MovieCatalogue /> }/>

        {/* MovieInfo component should be shown when the route looks like: */}
        {/* this will suggest a variable with the : - the movieId will constantly change */}
        <Route path="/:movieId" element={ <MovieInfo /> }/>
      </Routes>

    </div>
  );
}

export default App;

//This App consists of 3 components (all feeding back to App.js):
  //header
  //movie catalogue (which is only available on home page)
  //movie details component (rendered when user selects movie)

//now that we've added in the react-router-dom to create new URLs all within a single page application, we need to define routing configuration (often done inside App.js)
  //in the import section (before Header)
//define the routing configuration inside App
  //1. use Routes component (USUALLY used only once)
  //2. define individual Routes / URL paths which are available within your app as well as the components which are visible at those paths
    //2b. define 2 attributes inside the self closing Route - which component is visible (shown by element), and the URL you are showing it at (with path attribute)
      //with path, you DON'T need to add in the primary domain, you just start it as /whatever which will render as domain/whatever


//AFTER WE HAVE GALLERY SHOWING ITEMS AND THE <LI> WRAPPED IN A LINK:
//3. import MovieInfo to App.js
//4. go into <Routes> and add in another Route for MovieInfo
  //4b. the path: the / suggests the entire basic domain of the homepage, and you use the : colon to suggest that whatever comes after it will be a variable (since the id will change)
  //4c. the component we are rending will be <MovieInfo />