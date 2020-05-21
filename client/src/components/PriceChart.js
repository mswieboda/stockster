import React, { useEffect, useState } from 'react';
import Chart from "chart.js";

function PriceChart({ data }) {
  const chartRef = React.createRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded || !data || !data.length) {
      return;
    }

    new Chart(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: data.map(day => day.date),
        datasets: [
          {
            label: "Price",
            data: data.map(day => day.avg_price)
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
        }
      }
    });
    setLoaded(true);
  }, [loaded, data, chartRef]);

  return (
    <div>
      <canvas id="priceChart" ref={chartRef} />
    </div>
  );
}

export default PriceChart;
