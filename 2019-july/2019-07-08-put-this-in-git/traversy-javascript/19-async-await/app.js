// async function myFunction() {
//   // return "LTOtter"
//   const promise = new Promise((resolve, reject) => {
//     setTimeout( () => resolve("Monty"), 1000);
//   });
//   const error = false;
//   if(!error) {
//     const response = await promise;  //wait until primise is resolved
//     return response;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }
// myFunction()
// .then(response => console.log(response))
// .catch(error => console.log(error));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceed once it is resolved
  const data = await response.json();

  //only proceed once second promis is resolved

  return data;
}

getUsers().then(users => console.log(users));
