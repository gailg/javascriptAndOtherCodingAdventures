// async and await

const getTodos = async () => {
  const response = await fetch("todos/luigis.json");

  if(response.status !== 200){
    throw new Error("I cannot fetch the data :(");
  }
  const data = await response.json();
  return data;
};
console.log(`---------------------------------------------1`);
console.log(`---------------------------------------------2`);
const test = getTodos()
.then(data => console.log("resolved:", data))
.catch(error => console.log("error:", error.message));

console.log(`---------------------------------------------3`);
console.log(`---------------------------------------------4`);











