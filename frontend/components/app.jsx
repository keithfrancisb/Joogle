import React from 'react';
import { Route } from 'react-router-dom';

import SideBar from './sidebar/sidebar';
import NavBar from './navbar/navbar_container';
import JobsIndex from './jobs_index/jobs_index_container';
import Splash from './splash';

const App = () => {
  return (
    <div id="app">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-content-container">
        <NavBar />
        <Route exact path="/" component={Splash} />
        <Route path="/search" component={JobsIndex} />
        {/* AuthRoutes go here */}
      </div>
    </div>
  );
};
{/* <AuthRoute path="/search" component={SearchIndex} />
<AuthRoute path="/show/:jobId" component={JobShow} /> */}


export default App;