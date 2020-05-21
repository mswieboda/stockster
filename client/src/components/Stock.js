import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import PriceChart from './PriceChart';

function Stock() {
  const { symbol } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [loadedSymbol, setLoadedSymbol] = useState(null);
  const [name, setName] = useState(null);
  const [priceChartData, setPriceChartData] = useState([]);

  useEffect(() => {
    if (loadedSymbol === symbol) {
      return;
    }

    axios.get(`/api/stocks/${symbol}`).then(response => {
      let data = response.data;

      console.log(`GET ${symbol}`);

      if (data) {
        setName(data.name);
        setPriceChartData(data.price_chart_data);
        setLoadedSymbol(symbol);
        setLoaded(true);
      }
    });
  }, [loadedSymbol, symbol]);

  return (
    <div className="stock">
      { !loaded &&
        <span>Loading...</span>
      }
      { loaded &&
        <div>
          <div>
            {symbol} - {name}
          </div>
          <PriceChart data={priceChartData} />
        </div>
      }
    </div>
  );
}

export default Stock;
