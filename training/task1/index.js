function count(){
  let count = 0;
  return function(){
    return count++
  }
}
const makeCounter1 = count() 
const makeCounter2 = count() 


console.log(makeCounter1());

console.log(makeCounter1());

console.log(makeCounter1());

console.log(makeCounter1());

console.log(makeCounter2());
console.log(makeCounter2());