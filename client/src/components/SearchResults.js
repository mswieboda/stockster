import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css';

function SearchResults({ results }) {
  const [showResults, setShowResults] = useState(true);

  const onResultClick = (e) => {
    setShowResults(false);
  }

  useEffect(() => {
    if (results && results.length) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [results]);

  if(!showResults) return null;

  return (
    <div className="results">
      <ul className="results-list">
        { results && results.map((result, index) => {
          return (
            <li key={index}>
              <SearchResult result={result} onResultClick={onResultClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
