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

function getCustomerList(obj){
   return Object.entries(obj).map(
       (arr) =>  Object.assign(arr[1], {id : arr[0] })
  ).sort((a, b) => { a.age - b.age });
}

