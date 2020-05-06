const adminsIds =['1', '3'];

const users  = []

function markAdmins(users, ids) {
  return  users.map(user => {
    //  let userId = user.id;
      let isAdmin = ids.includes(user.id)
      return {...users, isAdmin}
    //  let isAdmin = false
    //    for(let id of ids){
    //        if(id==userId){
    //            isAdmin = true;
    //        }
    //    }
    });
}