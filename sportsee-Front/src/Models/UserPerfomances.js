export default class UserPerformances {
  constructor(data) {
    this.perf = []
    data.data.forEach((element) => {
      element.kind = data.kind[element.kind]
      this.perf.push(element)
    })
    // console.log('perf ', data)
    // console.log('perf ', this)
  }
}
