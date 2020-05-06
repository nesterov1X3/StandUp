const adminsIds =['1', '3'];

const users  = [
    {id: '1', name: 'Bob'},
    {id: '2', name: 'Tom'},
    {id: '3', name: 'Sam'}
]

function markAdmins(users, ids) {
  return  users.map(user => {
    //  let userId = user.id;
      let isAdmin = ids.includes(user.id)
      return {...users, isAdmin: isAdmin}
    //  let isAdmin = false
    //    for(let id of ids){
    //        if(id==userId){
    //            isAdmin = true;
    //        }
    //    }
    });
}
const res = markAdmins(users, adminsIds);
console.log(res)