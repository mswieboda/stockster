import React from 'react';
import SearchResult from './SearchResult';

function SearchResults({ results }) {
  return (
    <ul>
      {results && results.map((result, index) => {
        return (
          <li key={index}>
            <SearchResult result={result} />
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
