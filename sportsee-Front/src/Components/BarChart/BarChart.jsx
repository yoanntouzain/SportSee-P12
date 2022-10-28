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
        <Bar
          name="Poids (kg)"
          dataKey={props.kilograms}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey={props.calorie}
          fill="#FF0000"
          radius={[50, 50, 0, 0]}
          barSize={1}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.days} tick={{ stroke: '#9B9EAC' }} />
        <YAxis
          orientation="right"
          tickCount={3}
          axisLine={false}
          tick={{ stroke: '#9B9EAC' }}
        />
        <Legend verticalAlign="top" align="right" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default Barchart

// function Barchart(props) {
//   const getPath = (x, y, width, height) => {
//     return `M${x + width / 4},${y + height}C${x + width / 2},${y - height} ${
//       x + width / 3
//     },${y + height / 16}
//   ${x + width / 2.5}, ${y}
//           C${x + width},${y - height / 18} ${x + width / 4},${y + width * 3} ${
//       x + width / 1.4
//     }, ${y + height}Z`
//   }

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
//   }
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart data={props.data}>
//         <Bar
//           name="Poids (kg)"
//           dataKey={props.kilograms}
//           fill="#282D30"
//           shape={<TriangleBar />}
//         />
//         <Bar
//           name="Calories brûlées (kCal)"
//           dataKey={props.calorie}
//           fill="#FF0000"
//           shape={<TriangleBar />}
//         />

//         <XAxis dataKey={props.days} />
//         <YAxis />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Legend verticalAlign="top" />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }
// export default Barchart
