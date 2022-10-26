export default class UserActivitys {
  constructor(data) {
    this.sessions = []
    data.sessions.forEach((element) => {
      element.day = new Date(element.day).getDate()
      this.sessions.push(element)
    })

    // console.log('activity ', data)
    // console.log('activity ', this.sessions)
  }
}
