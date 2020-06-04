const obj = {
    name: 'Tom',
    age: 17,
    student: false,
    address: {
      country: 'Ukraine'
    },
    'two words': 'tricky prop'
  };
  /* выведите в консоль значение свойства 'name' с помощью точки */
  console.log(obj.name)
  const name = 'name'
  /* выведите в консоль значение свойства 'name' с помощью квадратных скобок */
  console.log(obj['name'])
  const key = 'age'
  console.log(obj[key]);
  /* выведите в консоль значение свойства название которого находится в переменной key */
  /* выведите в консоль значение свойства 'country' */
  console.log(obj)
  console.log(obj.address)
  console.log(obj.address.capital)
  
  /* присвойте объекту свойство hobby со значением 'football' */
  obj.hobby = 'football'
  obj['hooby'] = 'football'
  const anotherKey = 'married';

  obj[anotherKey] = false;
  console.log(obj.anotherKey)
  /* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */
  console.log(obj[''])
  /* присвойте объекту свойство 'favorite music' со значением 'rock' */
  /* выведите в консоль объект obj */