import React from 'react';
import { Link } from "react-router-dom";

function SearchResult({ result }) {
  return (
    <Link to={`/stocks/${result.symbol}`}>{result.name}</Link>
  );
}

export default SearchResult;
