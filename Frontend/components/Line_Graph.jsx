import React, { useEffect } from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

// Line graph to display the value of the bets over time.
// eventData is an array of series, each with shape:
//   { label: string, color: string, data: [{ time, value }, ...] }
function Line_Graph({ eventData }) {
  const [graphData, setGraphData] = React.useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = () => {
      // Use the time values from the first series as shared x-axis labels
      const labels = eventData[0]?.data.map(point => point.time) ?? [];

      // Build one dataset object per series
      const datasets = eventData.map(series => ({
        label: series.label,
        data: series.data.map(point => point.value),
        borderColor: series.color,
        backgroundColor: series.color.replace('rgb', 'rgba').replace(')', ', 0.15)'),
        fill: true,
        tension: 0.3,
      }));

      setGraphData({ labels, datasets });
    };
    fetchData();
  }, [eventData]);

  return <Line data={graphData} />;
}

export default Line_Graph;