const numbersList = [4, 6, 7, 3]



const getTotalPrice  = (arr) => {
  const sum = arr .reduce(function callback(acc, num){
    return acc + num
  }, 0);
  return '$' + Math.floor(sum * 100) / 100;
}
const result = getTotalPrice(numbersList)