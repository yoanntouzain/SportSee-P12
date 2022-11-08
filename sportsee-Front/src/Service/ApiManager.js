import UserActivitys from '../Models/UserActivitys'
import UserAverageSessions from '../Models/UserAverageSessions'
import UserInfo from '../Models/UserInfo'
import UserPerformances from '../Models/UserPerfomances'

/**
 * Retrieve user general information
 * @param {String} id user identifier
 * @returns {Object} user information
 */

async function getUserInfo(id) {
  let result = await fetch(`http://localhost:3000/user/${id}`)
  if (result.status === 200) {
    let userInfo = await result.json()
    return new UserInfo(userInfo.data)
  } else {
    return null
  }
}

/**
 * Retrieve user activity information
 * @param {String} id  user identifier
 * @returns {Object} user activity information
 */
async function getActivity(id) {
  let result = await fetch(`http://localhost:3000/user/${id}/activity`)
  let activityInfo = await result.json()
  return new UserActivitys(activityInfo.data)
}

/**
 * Retrieve user sessions duration average information
 * @param {String} id  user identifier
 * @returns {Object} user sessions duration average information
 */
async function getAverageSessions(id) {
  let result = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
  let averageSessionsInfo = await result.json()
  return new UserAverageSessions(averageSessionsInfo.data)
}

/**
 * Retrieve user performances information
 * @param {String} id  user identifier
 * @returns {Object} user performance information
 */
async function getPerformance(id) {
  let result = await fetch(`http://localhost:3000/user/${id}/performance`)
  let performanceInfo = await result.json()
  return new UserPerformances(performanceInfo.data)
}

export { getUserInfo, getActivity, getAverageSessions, getPerformance }
