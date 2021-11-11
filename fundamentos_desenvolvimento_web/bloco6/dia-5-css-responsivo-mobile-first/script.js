// function f2c(x) {
//     function convert(str, p1, offset, s) {
//       return ((p1 - 32) * 5/9) + 'C';
//     }
//     var s = String(x);
//     var test = /(-?\d+(?:\.\d*)?)F\b/g;
//     return s.replace(test, convert);
//   }
//   console.log(f2c(90))

function fahrenheit_to_celsius(temp_fahrenheit) {

let fahrenheit_convert = temp_fahrenheit.replace(/(-?\d+(?:\.\d*)?)F\b/g, '') 
let temp_celsius = (fahrenheit_convert - 32) / 1.8;
return temp_celsius + '°C';
}
fahrenheit_to_celsius(90F)