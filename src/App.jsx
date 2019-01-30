import './App.css';

import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import Main from './routes/Main';
import RaceWinners from './routes/RaceWinners';

const App = () => (
  <Router>
    <div className="panel-container">
      <div className="panel-body">
        <Switch>
          {/* shows the list of the winners for every race for the selected year. */}
          <Route path="/main/:season" component={RaceWinners} />

          {/* shows the list of World Champions */}
          <Route path="/main" component={Main} />

          <Redirect to="/main" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
