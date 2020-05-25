class Sportsman {
  constructor(name, age){
    this.name = name;
    }
    run = function(){
      console.log(`${this.name} is running`);
  }
  toString(){
    console.log('pa-bam');
    
  }
}

const user1 = new Sportsman('Bob', 33)


class Swimer extends Sportsman {
   constructor(name, style){
     super(name)
      this.style = style
   }
   swim(){
     console.log(`${this.name} swimming ${this.style}`);
     
   }
}

const sw1 = new Swimer('John',  'style1')
console.log(sw1);
sw1.swim()