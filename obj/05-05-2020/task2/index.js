//1.
//
//
//
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
}

function getCustomersList(obj){
   return Object.entries(obj).map(
       (arr) =>  Object.assign(arr[1], {id : arr[0] })
  ).sort((a, b) =>  a.age - b.age );
}

const result = getCustomersList(customers);
console.log(result)