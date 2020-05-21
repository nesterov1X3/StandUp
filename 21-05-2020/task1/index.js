export const user = {
  _firstName: 'John',
  lastName: 'Doe',
  getfullName() {
    return `${this.firstName} ${this.lastName}`
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },  
  setfullName(fullName){
    [this.firstName, this.lastName] =  fullName.split(' ')
    // this.firstName = parts[0];
    // this.lastName = parts[1]
  },
  set fullName(fullName){
    [this.firstName, this.lastName] =  fullName.split(' ')
    
  },
  set firstName(name){ 
    if(typeof name === 'string'){
      this._firstName = name
    }else{
      console.error('Not a string');
    }
  },
  get firstName(){ 
    return this._firstName
  }
}
// user.firstName = 1;
// console.log(user._firstName);

// console.log(user.fullName());
// user.fullName = 'riki tiki'
// console.log(user.fullName);

