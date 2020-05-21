import React from 'react';
import { Link } from "react-router-dom";

function SearchResult({ result, onResultClick }) {
  return (
    <Link
      to={`/stocks/${result.symbol}`}
      onClick={onResultClick}
    >
      {result.name}
    </Link>
  );
}

export default SearchResult;
