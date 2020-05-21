import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import './Search.css';

function Search() {
  let [results, setResults] = useState(null);

  const onChange = (e) => {
    let query = e.target.value;

    axios.get(`/api/stocks?search=${query}`).then(response => {
      let data = response.data;

      if (data.length) {
        setResults(data);
      }
    });
  };

  return (
    <div className="search-container">
      <div className="search">
        <SearchInput onChange={onChange} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default Search;
