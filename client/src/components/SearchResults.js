import React from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css';

function SearchResults({ results }) {
  return (
    <div className="results">
      <ul className="results-list">
        {results && results.map((result, index) => {
          return (
            <li key={index}>
              <SearchResult result={result} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
