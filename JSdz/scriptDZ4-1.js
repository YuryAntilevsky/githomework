'use strict'
const obj = {
  name: "random Object",
  height: "1 m",
  width: "2 m",
  parameter: function () {
    return this.name + "" + this.height
  },
  external: function (Variable1, Variable2) {
    return Variable1 + Variable2
  },
}
obj.color = "green"
obj.weight = "1000 kg"

console.log(obj.parameter(""))

console.log(obj.external(1, 2))






