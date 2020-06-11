//пример инкарсуляции
class Animal {
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(this.name);
  }
}
const a1  = new Animal('Jack')

console.log(a1);


class Dog extends Animal {}

const d1 = new Dog('Sam')

d1.sayHi()

//пример инкапуляции
function calculate(operation, a, b){
  const sum = (a, b) => a + b;
  const diff = (a, b) => a - b;

  if(operation === '+'){
    return sum(a, b)
  }

  if(operation === '-'){
    return diff(a, b)
  }
}

