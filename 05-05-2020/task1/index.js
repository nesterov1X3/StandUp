function buildObject(keylist, valueList){
    let obj = keylist.reduce((acc, key, index) =>{
       return  { ...acc, [key] : valueList[index] }  
    }, {});
    return obj
}

let keys = ['name', 'age'];
let values = ['Tom']