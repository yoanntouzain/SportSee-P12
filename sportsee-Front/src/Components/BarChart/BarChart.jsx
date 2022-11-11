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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    )
  }

  return null
}

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
          content={<CustomTooltip />}
        />
        {/* <Tooltip
          width="10%"
          offset={31}
          stroke={0}
          contentStyle={{
            background: 'red',
            border: 'none',
          }}
          labelStyle={{ display: 'none' }}
          itemStyle={{ color: 'white' }}
        /> */}
        <Bar
          yAxisId="yKilograms"
          name="Poids (kg)"
          dataKey={props.kilograms}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
        <Bar
          yAxisId="yCalories"
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
          yAxisId="yKilograms"
          orientation="right"
          tickCount={3.5}
          axisLine={false}
          tick={{ stroke: '#9B9EAC' }}
          tickMargin={45}
          // dataKey={props.calorie}
          dataKey="kilogram"
          domain={['dataMin-5', 'dataMax + 5']}
        />
        <YAxis
          yAxisId="yCalories"
          orientation="right"
          tickCount={3}
          axisLine={false}
          tick={{ stroke: '#9B9EAC' }}
          tickMargin={45}
          dataKey="calories"
          hide={true}
        />
        <Legend verticalAlign="top" align="right" iconType="circle" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default Barchart
