function printMessege(age){
 console.log(`Hello ${this.name}, email ${this.email}, age ${age}`);
 
}
// printMessege(43)


let user = {
  name: "Alex",
  email: "gmail.com"
}
//  printMessege.bind(user, 43)()

//  function bind1(func, context, ...args){
//    return func.bind(context, ...args);
//  }
//   bind1(printMessege, user)(30)
//   bind1(printMessege, user)(30)
//   bind1(printMessege, user, 30)()



// put to the context
//call func as object prop
// function bind(func, context, ...args){
//     return function(...args1){
//       let copyObj = Object.assign({}, context )
//       copyObj.temp = func;
//       // console.log(context);
//       return copyObj.temp(...args ,...args1)
//     }
// }

// bind(printMessege, user)(30)
//  bind(printMessege, user)(30)
//   bind(printMessege, user, 30)()

  function bind(func, context, ...args){
    return function(...args1){
      // console.log(...args1);
      
     func.call(context, ...args1, ...args)
    }
  }

  bind(printMessege, user)(30)
 bind(printMessege, user)(30)
  bind(printMessege, user, 30)()