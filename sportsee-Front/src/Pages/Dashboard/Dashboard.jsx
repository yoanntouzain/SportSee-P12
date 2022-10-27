import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFire,
  faDrumstickBite,
  faAppleWhole,
  faBurger,
} from '@fortawesome/free-solid-svg-icons'
// import {
//   getUserInfo,
//   getPerformance,
//   getAverageSessions,
//   getActivity,
// } from '../../Service/ApiManager'

//Données mocks
import {
  getUserInfo,
  getPerformance,
  getAverageSessions,
  getActivity,
} from '../../Service/MockManager'
import BarChart from '../../Components/BarChart/BarChart'
import Linechart from '../../Components/LineChart/LineChart'
import Radarchart from '../../Components/RadarChart/RadarChart'
import RadialBarCharts from '../../Components/RadialBarCharts/RadialBarCharts'
import { useParams } from 'react-router-dom'

/**
 * Display home page with user's graphics
 * @returns HTML content user's graphics
 */

function Dashboard() {
  const dataInitial = {
    value: 100,
    fill: 'none',
    opacity: 0,
  }

  const { id } = useParams()

  const [user, setUser] = useState({
    userInfos: {},
    keyData: {},
    todayScore: {},
  })

  const [performance, setPerformance] = useState([{ kind: '', value: 0 }])

  const [averageSession, setAverageSession] = useState([])

  const [activity, setactivity] = useState([])

  useEffect(() => {
    async function getUser() {
      let resultUser = await getUserInfo(id)
      setUser(resultUser)

      let resultPerf = await getPerformance(id)
      setPerformance(resultPerf.perf)

      let resultSession = await getAverageSessions(id)
      setAverageSession(resultSession.session)

      let resultActivity = await getActivity(id)
      setactivity(resultActivity.sessions)
    }
    getUser()
  }, [id])

  return (
    <div className="main-dashboard">
      {/* title */}
      <div className="header-dashboard">
        <div className="title-dashboard">
          <h1>
            Bonjour <span>{user.userInfos.firstName}</span>
          </h1>
        </div>
        <div className="subtitle-dashboard">
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
      </div>
      <section className="section-dashboard">
        {/* Article */}
        <article className="article-dashboard">
          {/* Article header */}
          <div className="article-dashboard-header">
            <BarChart
              data={activity}
              days="day"
              kilograms="kilogram"
              calorie="calories"
            />
          </div>
          {/* article sutitle */}
          <div className="article-dashboard-subtitle">
            <div className="plan line">
              <Linechart
                array={averageSession}
                days="day"
                sessionLength="sessionLength"
              />
            </div>
            <div className="plan">
              <Radarchart array={performance} category="kind" values="value" />
            </div>
            <div className="plan radial">
              {/* <RadialBarCharts /> */}
              {/* <RadialBarCharts data={test} oui="maKey" /> */}
              <RadialBarCharts
                data={[dataInitial, user.todayScore]}
                value="value"
              />
            </div>
          </div>
        </article>
        {/* Aside */}
        <aside className="aside-dashboard">
          <div className="aside-dashboard-container">
            <div className="logo-container calories">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div className="content-container">
              <div className="content-container-title">
                {user.keyData.calorieCount}
              </div>
              <div className="content-container-subtitle">Calories</div>
            </div>
          </div>

          <div className="aside-dashboard-container">
            <div className="logo-container protein">
              <FontAwesomeIcon icon={faDrumstickBite} />
            </div>
            <div className="content-container">
              <div className="content-container-title">
                {user.keyData.proteinCount}
              </div>
              <div className="content-container-subtitle">Protéines</div>
            </div>
          </div>

          <div className="aside-dashboard-container">
            <div className="logo-container carbohydrates">
              <FontAwesomeIcon icon={faAppleWhole} />
            </div>
            <div className="content-container">
              <div className="content-container-title">
                {user.keyData.carbohydrateCount}
              </div>
              <div className="content-container-subtitle">Glucides</div>
            </div>
          </div>

          <div className="aside-dashboard-container">
            <div className="logo-container lipids">
              <FontAwesomeIcon icon={faBurger} />
            </div>
            <div className="content-container">
              <div className="content-container-title">
                {user.keyData.lipidCount}
              </div>
              <div className="content-container-subtitle">Lipides</div>
            </div>
          </div>
          {/* <div className="test"></div> */}
        </aside>
      </section>
    </div>
  )
}

export default Dashboard
