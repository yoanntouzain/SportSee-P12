import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import './RadialBarCharts.css'

const style = {
  top: 'auto',
  left: 'auto',
}

/**
 *
 * @param {Object} props user data
 * @returns HTML user's radial chart about score objective
 */
function RadialBarCharts(props) {
  const legendRender = (props) => {
    return (
      <div className="containerScore">
        <div className="valueScore">{props.payload[1].payload.value}%</div>
        <div className="nameScore">de votre objectif</div>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="40%"
        outerRadius="140%"
        barSize={15}
        data={props.data}
        startAngle={90}
        endAngle={450}
        className="radial-bar-chart"
      >
        <RadialBar
          minAngle={15}
          dataKey={props.value}
          label={{
            position: 'center',
            fill: 'black',
          }}
          cornerRadius={50}
          background={{ fill: 'white' }}
        ></RadialBar>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
          content={legendRender}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

RadialBarCharts.propTypes = {
  value: PropTypes.string.isRequired,
}
export default RadialBarCharts
