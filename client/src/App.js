import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Search from './components/Search';
import Stock from './components/Stock';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Search/>
      </div>
      <Switch>
        <Route path="/stocks/:symbol">
          <Stock />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
