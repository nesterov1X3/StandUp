function some(arr){
    for(let i = 0; i < arr.length; i++){
        // console.log(i);
        // console.log(arr[i]);

        if(arr[i] % 3 === 0){
            return true;
        }  
    }
    return false;
}

const numbers = [3, 5, 6, 6, 7]
const result = some(numbers);

    console.log(result)
    console.log(numbers)
