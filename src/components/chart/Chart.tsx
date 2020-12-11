import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';
  
export type ChartProps = {
  chartData : ChartDatatype[],
  dataKeyName : string;
}

export type ChartDatatype = {
  [key : string] : string | number
}

const Chart : React.FC<ChartProps> = ({chartData, dataKeyName}) => {
  //chart can fit into any device
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 15, right: 20, left: 0, bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKeyName} stroke="#131047" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      );
};
export default Chart;