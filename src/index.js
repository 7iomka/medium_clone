import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

import Routes from 'routes';

// import './index.css';
const App = () => {
  return (
    <div>
      <h3>Welcome to Hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

