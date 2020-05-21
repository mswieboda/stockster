import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Search from './components/Search';
import Stock from './components/Stock';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Search/>

      <Switch>
        <Route path="/stocks/:symbol">
          <Stock />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
