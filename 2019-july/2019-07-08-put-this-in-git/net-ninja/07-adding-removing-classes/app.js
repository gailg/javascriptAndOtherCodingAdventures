const paragraphs = document.querySelectorAll("p");
paragraphs.forEach( p => {
  if(p.innerText.includes("success")) {
    p.classList.add("success");
  } else if(p.innerText.includes("error")) {
    p.classList.add("error");
  }
});


const article = document.querySelector("article");
const children = Array.from(article.children);
children.forEach( child => {
  child.classList.add("article-element");
});

const title = document.querySelector("h2");
console.log(`-------------------------title.parentElement`);
console.log(title.parentElement);
console.log(`-------------------------title.parentElement.parentElement`);
console.log(title.parentElement.parentElement);
console.log(`-------------------------title.nextElementSibling`)
console.log(title.nextElementSibling);
console.log(`-------------------------title.previousElementSibling`)
console.log(title.previousElementSibling);
console.log(`-------------------------title.nextElementSibling.parentElement.children`)
console.log(title.nextElementSibling.parentElement.children);

const button = document.querySelector("button");
button.addEventListener("click", e => {
  console.log("you clicked me");
});

const items = document.querySelectorAll("li");
items.forEach(item => {
  item.addEventListener("click", e => {
    e.target.style.textDecoration = "line-through";
  })
})
