const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';


/* getUsersList code here */
export const getUsersList = () => {
  return fetch(baseUrl)
    .then((response) => {
      return response.json()
    })
}
getUsersList()
  .then(data => console.log(data));



/* getUserById code here */
export const getUserById = (userId) => {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => 
       response.json()
    )
}
// getUserById(43)
//   .then(data => console.log(data));

/* createUser code here */

const user = {
  firstName: 'Bob',
  lastName: 'Job'
}

export const createUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
};
createUser(user)
  .then(() =>  console.log('User created'))


/* updateUser code here */
export const updateUser = (userId, updatedUserData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedUserData),
  });
};
updateUser(12, user)
.then(() => console.log('User updated'))


/* deleteUser code here */


export const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
};
deleteUser(42)
.then(()=> console.log('user deleted'))