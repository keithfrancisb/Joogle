import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { fetchJobs } from './store/util/job_util';

document.addEventListener('DOMContentLoaded', () => {

  window.fetchJobs = fetchJobs;

  const root = document.querySelector('#root');
  ReactDOM.render(<Root/>, root);
});