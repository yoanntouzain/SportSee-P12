import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Legend,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from 'recharts'

import PropTypes from 'prop-types'
import './lineChart.css'

/**
 *
 * @param {Object} props user data
 * @returns HTML user's line chart about average duration sesion
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-Line">
        <p className="label-Line">{`${payload[0].payload.sessionLength} min`}</p>
      </div>
    )
  }
  return null
}

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
          style={{ fill: 'white' }}
          interval="0"
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey={props.sessionLength}
          stroke="white"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

Linechart.propTypes = {
  days: PropTypes.string.isRequired,
  sessionLength: PropTypes.string.isRequired,
}
export default Linechart
