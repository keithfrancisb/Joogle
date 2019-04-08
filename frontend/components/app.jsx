import React from 'react';
import { AuthRoute } from 'react-router-dom';

import NavBar from './navbar/navbar';

const App = (props) => {
  return (
    <div>
      <div>
        <header>
          <NavBar />
        </header>
      </div>

    </div>
  );
};
{/* <AuthRoute exact path="/" component={} /> */}

export default App;