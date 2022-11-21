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
import PropTypes from 'prop-types'

import './barChart.css'

/**
 *
 * @param {Object} props user data
 * @returns HTML user's bar chart about activity daily
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {`${payload[0].value}kg`}
          <br />
          {`${payload[1].value}kCal`}
        </p>
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
          labelStyle={{ display: 'none' }}
          itemStyle={{ color: 'white' }}
          content={<CustomTooltip />}
        />
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
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey={props.days}
          tick={{ stroke: '#9B9EAC' }}
          tickMargin={16}
        />
        <YAxis
          yAxisId="yKilograms"
          orientation="right"
          tickCount={3.5}
          axisLine={false}
          tick={{ stroke: '#9B9EAC' }}
          tickMargin={45}
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
        {/* <Legend verticalAlign="top" align="right" iconType="circle" /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}

Barchart.propTypes = {
  days: PropTypes.string.isRequired,
  kilograms: PropTypes.string.isRequired,
  calorie: PropTypes.string.isRequired,
}

export default Barchart
