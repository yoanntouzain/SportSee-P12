import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './RadialBarCharts.css'
const data = [
  {
    uv: 100,
    fill: 'none',
    opacity: 0,
  },
  {
    name: 'de votre objectif',
    uv: 50,
    fill: 'currentColor',
  },
]

const style = {
  // width: '62px',
  top: '58%',
  right: 0,
  // transform: 'translate(-91%, -50%)',
  // lineHeight: '14px',
  // color: '#74798C',
}

function RadialBarCharts(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="40%"
        outerRadius="140%"
        barSize={15}
        // data={data}
        data={props.data}
        startAngle={90}
        endAngle={450}
        className="radial-bar-chart"
      >
        <RadialBar
          minAngle={15}
          // dataKey="uv"
          dataKey={props.oui}
          label={{
            position: 'center',
            fill: 'black',
          }}
          background={{ fill: 'white' }}
        ></RadialBar>
        <Legend
          // fontSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
export default RadialBarCharts
