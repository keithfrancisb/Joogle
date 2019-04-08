import React from 'react';
import { AuthRoute } from 'react-router-dom';

import SideBar from './sidebar/sidebar';
import NavBar from './navbar/navbar';

const App = (props) => {
  return (
    <div>
      <div>
        <header>
          <NavBar />
        </header>
      </div>
      <div>
        <SideBar />
        {/* AuthRoutes go here */}
      </div>
    </div>
  );
};
{/* <AuthRoute exact path="/" component={} /> */}

export default App;