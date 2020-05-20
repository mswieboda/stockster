import React from 'react';
import SearchResult from './SearchResult';

function SearchResults({ results }) {
  return (
    <div>
      {results && results.map(result => {
        return (
          <ul>
            <li>
              <SearchResult result={result} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default SearchResults;
