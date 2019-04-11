import React from 'react';

import { Route } from 'react-router-dom';

import SideBar from './sidebar/sidebar_container';
import JobsIndex from './jobs_index/jobs_index_container';
import JobShow from './job_show/job_show_containter';

const NonSplash = () => {
  return (
    <div className="overall-container">
      <Route path="/search" component={SideBar} />
      <Route path="/search" component={JobsIndex} />
      <Route path="/show/:jobId" component={JobShow} />
    </div>
  );
};

export default NonSplash;