import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.results && props.results.map(result => {
        return (<div>{result}</div>);
      })}
    </div>
  );
}

export default SearchResults;
