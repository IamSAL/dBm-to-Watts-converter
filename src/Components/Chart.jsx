import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Chart = ({data}) => {
  return (
    
    <LineChart width={600} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="watt" stroke="#ff9900" />
    <Line type="monotone" dataKey="dBm" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="dBm" />
    <YAxis dataKey="watt"/>
    <Tooltip />
  </LineChart>
  )
}

export default Chart
