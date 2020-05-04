const user = {
    name: "msx",

}
// input: object, string
//output: object
function addPropertyV1(userData, userId){
   userData.id = userId;
   return userData;
}




function addPropertyV2(userData, userId){
    Object.assign(userData, {id:userId})
    return userData
}
// const rest = addPropertyV2(user, 343563)
// console.log(rest)

const addPropertyV3 = (userData, userId) => 
    Object.assign({}, userData, {id: userId});


 const addPropertyV4 = (userData, userId) => {
    return {...userData, id:userId}
 }