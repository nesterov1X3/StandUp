const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';


/* getUsersList code here */
export const getUsersList = () => {
  return fetch(baseUrl)
    .then((response) => {
      return response.json()
    })
}
// getUsersList()
//   .then(data => console.log(data));



/* getUserById code here */
const getUserById = (userId) => {
  return fetch(`${baseUrl}/${userId}`)
    .then((response) => {
      return response.json()
    })
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
// createUser(user)
//   .then(response =>  console.log(response))
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
/* deleteUser code here */

export const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
};