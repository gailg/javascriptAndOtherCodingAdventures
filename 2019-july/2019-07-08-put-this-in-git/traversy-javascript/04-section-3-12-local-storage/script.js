// localStorage.setItem("otter", "Larry");
// sessionStorage.setItem("otter", "Monty");
// localStorage.removeItem("otter");
// sessionStorage.removeItem("otter");
// const otter = localStorage.getItem("otter");
// localStorage.clear();
// console.log(otter);

document.querySelector("form").addEventListener("submit", (e) => {
  console.log("123");
  const task = document.getElementById("task").value;
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert(`The task "${task}" has been saved`);
  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem("tasks"));
