const numbersList = [1, 2, 3, 4, 5];

function square(num){
 num * num
}
const squareNumbers = numbersList.map(square)
// console.log(squareNumbers)

function callback(num){
  return num % 2 ===0
}
const evenNumbers  = numbersList.filter(callback);
console.log(evenNumbers)




