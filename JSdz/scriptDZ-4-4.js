'use strict'
const obj = {
    name: "random Object",
    height: "1 m",
    width: "2 m",
    }
    function propertyValue(property, value) {
        let result = "";
        for (let i in property) {
          if (property.hasOwnProperty(i)) {
              result += value + " : " + property[i] + "\n";
          }
        }
        return result;
      }
      console.log(propertyValue(obj, "obj"))