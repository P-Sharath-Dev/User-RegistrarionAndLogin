// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  users.push({...user,id : user.length+1});
  return true;
};

export const authenticateUser = (reqUser) => {
  // Write your code here
  let auth = false;
  users.forEach((user)=>{
    if(user.email === reqUser.email && user.password === reqUser.password){
      auth = true;
    }

  })
  return auth;
};
