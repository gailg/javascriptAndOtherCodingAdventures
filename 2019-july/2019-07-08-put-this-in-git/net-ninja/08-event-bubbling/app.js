const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

ul.addEventListener("click", e => {

  console.log(e.target);
});

// items.forEach(item => {
//   item.addEventListener("click", e => {
//     console.log("event in li");
//     e.stopPropagation();
//     e.target.remove();
//   })
// });

button.addEventListener("click", e => {
  // ul.innerHTML +=`<li> do something else</li>`
  const li = document.createElement("li");
  li.textContent = "Water the garden";
  // ul.append(li);
  ul.prepend(li);

});


ul.addEventListener("click", e => {
  console.log(e);
  if(e.target.tagName === "LI") {
    e.target.remove();
  }
});

// copy

const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("Hello... my content is copyright");
});

// mousemove

const box = document.querySelector(".box");
box.addEventListener("mousemove", e => {
  // console.log(`e.offsetX: ${e.offsetX} e.offsetY: ${e.offsetY}`);
  box.textContent = `x is ${e.offsetX} and y is ${e.offsetY}`;
})

// scroll

document.addEventListener("wheel", e => {
  console.log(e.pageX, e.pageY);
})