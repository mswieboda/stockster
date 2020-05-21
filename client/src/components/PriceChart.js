import React, { useEffect, useState } from 'react';
import Chart from "chart.js";
import "./PriceChart.css"

function PriceChart({ symbol, data }) {
  const chartRef = React.createRef();
  const [loaded, setLoaded] = useState(false);
  const [loadedSymbol, setLoadedSymbol] = useState(null);

  useEffect(() => {
    if ((loaded && loadedSymbol === symbol) || !data || !data.length) {
      return;
    }

    new Chart(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: data.map(day => day.date),
        datasets: [
          {
            label: "Price",
            data: data.map(day => day.avg_price),
            backgroundColor: "#f90",
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }],
          yAxes: [{
            ticks: {
              callback: (value, index, values) => '$' + value.toFixed(0)
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => '$' + tooltipItem.yLabel.toFixed(4)
          }
        }
      }
    });

    setLoadedSymbol(symbol);
    setLoaded(true);
  }, [loaded, loadedSymbol, symbol, data, chartRef]);

  return (
    <div className="price-chart">
      <canvas id="priceChart" ref={chartRef}/>
    </div>
  );
}

export default PriceChart;
