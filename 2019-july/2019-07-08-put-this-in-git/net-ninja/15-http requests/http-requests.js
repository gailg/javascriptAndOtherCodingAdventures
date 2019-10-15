const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      callback(undefined, data);
    } else if (request.readyState === 4) {

      callback(`I could not fetch the data :(`, undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};

console.log(`-----------------------------------------------------------1`)
console.log(`-----------------------------------------------------------2`)
getTodos("https://jsonplaceholder.typicode.com/todos/", (error, data) => {
  console.log("callback fired");
  if(error) {
    console.log(error);
  } else {
    console.log(data);
  }
})

console.log(`-----------------------------------------------------------3`)
console.log(`-----------------------------------------------------------4`)


// callback hell
// getTodos("todos/luigi.json", (error, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (error, data) => {
//     console.log(data);
//     getTodos("todos/shawn.json", (error, data) =>{
//       console.log(data);
//     });
//   });
// });

// promise example

const getSomething = () => {
  return new Promise( (resolve, reject) => {
    // fetch something
    // resolve("some data");
    reject("some error");

  });
};

// getSomething().then( (data) => {
//   console.log(data);
// }, (error) => {
//   console.log(error);
// })

// a better way to write it

getSomething().then( data => {
  console.log(data);
}).catch( error => {
  console.log(error);
});