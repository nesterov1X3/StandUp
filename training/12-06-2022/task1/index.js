
const arr = [1, -4, 7, 12]
function positiveSum(arr) {
  let res;
  if (arr.length == 0) {
    res = 0
  } else {
    res =  arr.filter(item => item > 0)
      .reduce((acc, elem) => acc + elem)
  }
  return res
}
const result = positiveSum(arr)
console.log(result);
