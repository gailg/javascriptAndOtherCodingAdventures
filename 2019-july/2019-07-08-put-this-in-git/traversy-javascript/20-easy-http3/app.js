const http = new EasyHTTP;

// get users

// const users = http.get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(error));

//user data

const data = {
  name: "Larry Otter",
  username: "ltotter",
  email: "ltotter@gmail.com"
};

// create user

// http.post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(error));

// update user

// http.put("https://jsonplaceholder.typicode.com/users/2", data)
// .then(data => console.log(data))
// .catch(err => console.log(error));

// update user

http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(error));