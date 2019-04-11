import React from 'react';
import { Route } from 'react-router-dom';

import NonSplash from './non-splash';
import NavBar from './navbar/navbar_container';
import Splash from './splash/splash_container';


const App = () => {
  return (
    <div id="app">
        <Route exact path="/" component={Splash} />
        <Route path="/search" component={NavBar} />
        <Route path="/search" component={NonSplash} />
        <Route path="/show/:jobId" component={NavBar} />
        <Route path="/show/:jobId" component={NonSplash} />
    </div>
  );
};


export default App;