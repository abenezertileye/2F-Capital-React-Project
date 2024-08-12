import * as React from 'react';
import { LineChart } from '@mui/x-charts';

function LineGraph() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          line: {
            color: 'blue',
          },
          areaStyle: {
            color: 'rgba(0, 0, 255, 0.2)'
          },
        },
      ]}
      width={800}
      height={300}
    />
  );
}

export default LineGraph;
