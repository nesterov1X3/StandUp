const obj = {
    name: 'John',
    sayHi() {
       return  this;
    }
}
const func = obj.sayHi;
// console.log(func);
// func
obj.sayHi()
const func1 = obj.sayHi;
// console.log(func1)
const a = func1.bind(obj);
// console.log(a);