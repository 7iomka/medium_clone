import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import TopBar from 'components/topBar';

// import './index.css';
const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
