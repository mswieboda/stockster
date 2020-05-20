import React from 'react';

function SearchResult({ result }) {
  return (
    <a href={`stocks/${result.symbol}`}>{result.name} - {result.symbol}</a>
  );
}

export default SearchResult;
