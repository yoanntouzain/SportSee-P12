import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './barChart.css'

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
      >
        <Legend verticalAlign="top" />
        <Bar name="Poids (kg)" dataKey={props.kilograms} fill="#282D30" />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey={props.calorie}
          fill="#FF0000"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.days} />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default Barchart
