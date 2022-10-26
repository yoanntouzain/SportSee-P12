import React from 'react'
import './radarChart.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function Radarchart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={props.array}
        className="radar-chart"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={props.category} />
        <Radar dataKey={props.values} fill="red" fillOpacity={1} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
export default Radarchart
