const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

ul.addEventListener("click", e => {
  console.log("event in ul")
});

items.forEach(item => {
  item.addEventListener("click", e => {
    console.log("event in li");
    e.stopPropagation();
    e.target.remove();
  })
});

button.addEventListener("click", e => {
  // ul.innerHTML +=`<li> do something else</li>`
  const li = document.createElement("li");
  li.textContent = "Water the garden";
  // ul.append(li);
  ul.prepend(li);

});