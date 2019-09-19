console.log(document);
console.log(document.all);
console.log(document.body);
console.log(document.doctype);
let scripts = Array.from(document.scripts);
scripts.forEach(script => {
  console.log(script.getAttribute("src"));
})
console.log(document.getElementById("task-title"));
// document.getElementById("task-title").style.background = "#f0f0f0";
document.getElementById("task-title").textContent = "Gail's things to do"

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle);
// document.querySelector("li").style.color = "red";

let items = Array.from(document.getElementsByClassName("collection-item"));
console.log(items[0]);

const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach( (item, index) => {
  item.textContent = `${index}: Hello`;
  if(index % 2 == 0) {
    item.style.color = "red";
  }
})

const children = document.querySelector("ul.collection").childNodes;
let listItem = document.querySelector("li.collection-item:first-child");
children.forEach( x => {
  console.log(x.nodeName)
})
children.forEach( x => {
  console.log(x.nodeType)
})
  
console.log(listItem.parentElement);
console.log(listItem.nextElementSibling);


