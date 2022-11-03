import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import './lineChart.css'

/**
 *
 * @param {Object} props user data
 * @returns HTML user's line chart about average duration sesion
 */
function Linechart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={props.array}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey={props.days}
          style={{ fill: 'white', stroke: 'transparant' }}
          interval="0"
        />
        <YAxis hide={true} />
        <Legend />
        <Line type="monotone" dataKey={props.sessionLength} stroke="white" />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default Linechart
