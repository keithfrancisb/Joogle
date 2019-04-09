import React from 'react';
import { Route } from 'react-router-dom';

import SideBar from './sidebar/sidebar';
import NavBar from './navbar/navbar_container';
import JobsIndex from './jobs_index/jobs_index_container';
import Splash from './splash';

{/* <div className="navbar-container"> */}
// </div>
const App = () => {
  return (
    <div id="app">
        <NavBar />
      <div className="overall-container">
        <SideBar />
        <div className="main-content-container">
          <Route exact path="/" component={Splash} />
          <Route path="/search" component={JobsIndex} />
          {/* AuthRoutes go here */}
        </div>

      </div>
    </div>
  );
};
{/* <AuthRoute path="/search" component={SearchIndex} />
<AuthRoute path="/show/:jobId" component={JobShow} /> */}


export default App;