function squareArr(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
         const square =  arr[i] *  arr[i];
         result.push(square);
    }
    return result;
}
    const numbers = [1, 2, 3, 4, 5,];
    const result = squareArr(numbers);

    console.log(result)
    console.log(numbers)

