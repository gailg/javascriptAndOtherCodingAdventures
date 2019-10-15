const getTodos = (resource, callback) => {
  return new Promise( (resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(`error---I could not fetch the data :()`);
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

console.log(`-----------------------------------------------------------1`)
console.log(`-----------------------------------------------------------2`)
// getTodos("https://jsonplaceholder.typicode.com/todos/").then( data => {
//   console.log("promise resolved: ", data);
// }).catch( error => {
//   console.log("promise rejected: ", error);
// })

console.log(`-----------------------------------------------------------3`)
console.log(`-----------------------------------------------------------4`)


getTodos("todos/luigi.json")
  .then(data => {
    console.log("promise luigi resolved:", data);
    return getTodos("todos/mario.json");
  }).then(data => {
    console.log("promise mario resolved", data);
    return getTodos("todos/shaun.json");
  }).then(data => {
    console.log("promise shaun resolved", data);
  }).catch(error => {
    console.log("promise rejected: ", error);
  });

