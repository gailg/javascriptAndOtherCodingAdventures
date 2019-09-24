// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// // Load all event listeners
// loadEventListeners();

// function loadEventListeners() {
//   document.addEventListener("DOMContentLoaded", getTasks);
//   form.addEventListener("submit", addTask);
//   taskList.addEventListener("click", removeTask);
//   clearBtn.addEventListener("click", clearTasks);
//   filter.addEventListener("keyup", filterTasks);
// }

// function getTasks() {
//   let tasks;
//   if(localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.forEach(task => {
//     const li = document.createElement("li");
//     li.className = "collection-item"
//     li.appendChild(document.createTextNode(task));
//     const link = document.createElement("a");
//     link.className = "delete-item secondary-content";
//     link.innerHTML = `<i class="fa fa-remove"></i>`;
//     li.appendChild(link);
//     taskList.appendChild(li);
//   })
// }

// function addTask(e) {
//   if(taskInput.value === "") {
//     alert("Add a todo");
//   }
//   const li = document.createElement("li");
//   li.className = "collection-item"
//   li.appendChild(document.createTextNode(taskInput.value));
//   const link = document.createElement("a");
//   link.className = "delete-item secondary-content";
//   link.innerHTML = `<i class="fa fa-remove"></i>`;
//   li.appendChild(link);
//   taskList.appendChild(li);
//   console.log(`from addTask taskIniput.value: ${taskInput.value}`)
//   storeTaskInLocalStorage(taskInput.value);
//   taskInput.value = "";
//   e.preventDefault();
// }

// function storeTaskInLocalStorage(task) {
//   let tasks;
//   if(localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     console.log(`storeTaskInLocalStorage getting reading to get tasks from localStorage`);
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function removeTask(e) {
//   if(e.target.parentElement.classList.contains("delete-item")){
//     const deleteItemText = e.target.parentElement.parentElement.textContent;
//     if(confirm(`Are you sure you want to delete "${deleteItemText}"?`)){
//       e.target.parentElement.parentElement.remove();
//       removeTaskFromLocalStorage(e.target.parentElement.parentElement);
//     }
//   }
//   e.preventDefault();
// }

// function removeTaskFromLocalStorage(taskItem) {
//   let tasks;
//   if(localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.forEach( (task, index) => {
//     if(taskItem.textContent === task) {
//       tasks.splice(index, 1);
//     }
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// function clearTasks(e) {
//   // taskList.innerHTML = ""; jsperf.com
//   while(taskList.firstChild) {
//     console.log(taskList.firstChild);
//     taskList.removeChild(taskList.firstChild);
//   }
//   clearTasksFromLocalStorage()
//   e.preventDefault();
// }

// function clearTasksFromLocalStorage() {
//   localStorage.clear();
// }
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll(".collection-item").forEach(task => {
//     const item = task.firstChild.textContent;
//     if(item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = "block";
//     } else {
//       task.style.display = "none";
//     }
//   })
// }


