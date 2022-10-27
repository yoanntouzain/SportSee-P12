import UserActivitys from '../Models/UserActivitys'
import UserAverageSessions from '../Models/UserAverageSessions'
import UserInfo from '../Models/UserInfo'
import UserPerformances from '../Models/UserPerfomances'

/**
 * Retrieve user general information
 * @returns {Object} user information
 */
async function getUserInfo(id) {
  let result = await fetch(`http://localhost:3001/data.json`)
  let data = await result.json()
  let userInfo = data.USER_MAIN_DATA.find((user) => user.data.id === id)
  return new UserInfo(userInfo.data)
}

/**
 * Retrieve user activity information
 * @returns {Object} user activity information
 */
async function getActivity(id) {
  let result = await fetch(`http://localhost:3001/data.json`)
  let data = await result.json()
  let activityInfo = data.USER_ACTIVITY.find((user) => user.data.userId === id)
  return new UserActivitys(activityInfo.data)
}

/**
 * Retrieve user sessions duration average information
 * @returns {Object} user sessions duration average information
 */
async function getAverageSessions(id) {
  let result = await fetch(`http://localhost:3001/data.json`)
  let data = await result.json()
  let averageSessionsInfo = data.USER_AVERAGE_SESSIONS.find(
    (user) => user.data.userId === id
  )
  return new UserAverageSessions(averageSessionsInfo.data)
}

/**
 * Retrieve user performances information
 * @returns {Object} user performance information
 */
async function getPerformance(id) {
  let result = await fetch(`http://localhost:3001/data.json`)
  let data = await result.json()
  let performanceInfo = data.USER_PERFORMANCE.find(
    (user) => user.data.userId === id
  )
  return new UserPerformances(performanceInfo.data)
}

export { getUserInfo, getActivity, getAverageSessions, getPerformance }
