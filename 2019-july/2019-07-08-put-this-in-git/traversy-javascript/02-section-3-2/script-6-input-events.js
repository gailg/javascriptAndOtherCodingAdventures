const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5");
taskInput.value = "";

form.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log(`event-type: ${e.type}`);
  console.log(taskInput.value);


  e.preventDefault();
}

form.addEventListener("keypress", (e) => {
  // console.log(`event type: ${e.type}`);
  // console.log(e.target.value);
  heading.innerText = e.target.value;
})