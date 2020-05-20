import React from 'react';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        Stockster
        <Search/>
      </header>
    </div>
  );
}

export default App;
