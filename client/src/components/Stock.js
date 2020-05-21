import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Stock() {
  const { symbol } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (loaded) {
      return;
    }

    axios.get(`/api/stocks/${symbol}`).then(response => {
      let data = response.data;

      console.log(`GET ${symbol}`);

      if (data) {
        setName(data.name);
        setPrices(data.prices);
        setLoaded(true);
      }
    });
  }, [loaded]);

  return (
    <div>
      {!loaded &&
        <span>Loading...</span>
      }
      { loaded &&
        <div>
          <div>
            {symbol} - {name}
          </div>
          <div>
            {prices}
          </div>
        </div>
      }
    </div>
  );
}

export default Stock;
