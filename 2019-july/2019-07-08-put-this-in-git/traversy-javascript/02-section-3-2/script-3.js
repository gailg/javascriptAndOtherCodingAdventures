const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Larry's List"));
const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");
cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
// lis[0].remove();
const firstLi = document.querySelector(`li:first-child`);
const link = firstLi.children[0];
link.classList.add("star");
link.classList.remove("sangea1");
// console.log(link.getAttribute("href"));
link.setAttribute("href", `http://google.com`);
link.setAttribute("title", "Google");
console.log(link.hasAttribute("title"));

