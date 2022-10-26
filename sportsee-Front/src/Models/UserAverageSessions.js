export default class UserAverageSessions {
  constructor(data) {
    let day = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    }

    this.session = []

    data.sessions.forEach((element) => {
      element.day = day[element.day]
      this.session.push(element)
    })
    // console.log('average ', data)
    // console.log('average ', this)
  }
}
