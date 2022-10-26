export default class UserInfo {
  constructor(data) {
    for (const [key] of Object.entries(data)) {
      if (`${key}` === 'score') {
        data.todayScore = data.score
        delete data.score
      }
    }
    data.todayScore = {
      name: `de votre objectif`,
      value: data.todayScore * 100,
      fill: 'currentColor',
    }
    return data
  }
}
