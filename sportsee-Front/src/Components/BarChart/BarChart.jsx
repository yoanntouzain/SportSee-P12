import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './barChart.css'

/**
 *
 * @param {Object} props user data
 * @returns HTML user's bar chart about activity daily
 */

function Barchart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={props.data}
        width="100%"
        height="100%"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap="10%"
        barGap="8"
      >
        <Tooltip
          width="10%"
          offset={31}
          stroke={0}
          contentStyle={{
            background: 'red',
            border: 'none',
          }}
          labelStyle={{ display: 'none' }}
          itemStyle={{ color: 'white' }}
        />
        <Bar
          name="Poids (kg)"
          dataKey={props.kilograms}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey={props.calorie}
          fill="#FF0000"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={props.days}
          tick={{ stroke: '#9B9EAC' }}
          axisLine={false}
          tickMargin={16}
        />
        <YAxis
          orientation="right"
          tickCount={3}
          axisLine={false}
          tick={{ stroke: '#9B9EAC' }}
          tickMargin={45}
        />
        <Legend verticalAlign="top" align="right" iconType="circle" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default Barchart
