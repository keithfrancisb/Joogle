import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

// import { fetchJobs } from './store/util/job_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.getState = store.getState;
  // window.fetchJobs = fetchJobs;

  const root = document.querySelector('#root');
  ReactDOM.render(<Root store={store}/>, root);
});