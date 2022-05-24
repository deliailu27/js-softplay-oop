// TODO: Write your class in this file
class SoftPLay {
  constructor() {
    this.adults = 0
    this.children = 0
  }
  occupancy() {
    return {'adults': this.adults, 'children': this.children}
  }
  enter(a,c) {
    if (c <= a) {
      this.adults += a
      this.children += c
      return true
    }
    else {
      return false
    }
  }
  leave(a,c){
    if (a<=this.adults && c<=this.children && c <= a && this.adults-a >= this.children-c) {
      this.adults -= a
      this.children -= c
      return true
    }
    else {
      return false
    }
  }

}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPLay
}

