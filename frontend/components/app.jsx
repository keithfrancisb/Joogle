import React from 'react';
import { Route } from 'react-router-dom';

import SideBar from './sidebar/sidebar_container';
import NavBar from './navbar/navbar_container';
import JobsIndex from './jobs_index/jobs_index_container';
import JobShow from './job_show/job_show_containter';
import Splash from './splash';

{/* <div className="navbar-container"> */}
// </div>
const App = () => {
  return (
    <div id="app">
        <NavBar />
      <div className="overall-container">
        {/* Routes go here */}
        <Route path="/search" component={SideBar} />
        <Route exact path="/" component={Splash} />
        <Route path="/search" component={JobsIndex} />
        <Route path="/show/:jobId" component={JobShow} />
      </div>
    </div>
  );
};
{/* <Route path="/show/:jobId" render={() => <div></div>} /> */}
// <div className="main-content-container">
// </div>

// main content container is for search


export default App;