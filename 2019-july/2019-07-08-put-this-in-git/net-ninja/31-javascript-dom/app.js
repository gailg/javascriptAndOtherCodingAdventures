// let banner = document.getElementById("page-banner");
// let bookList = document.getElementById("book-list");
let titles = document.getElementsByClassName("title");
let listItems = document.getElementsByTagName("li");
Array.from(titles).forEach(title => console.log(title) );
const wrapper = document.querySelector("#wrapper");
const goneWithWind = document.querySelector("#book-list li:nth-child(2) .name");
const books = document.querySelectorAll("#book-list li .name");
books.forEach( book => {
  book.textContent += "(book title)";
});
const bookList = document.querySelector("#book-list");
// bookList.innerHTML = `<h2> Books and more books </h2>`;
// bookList.innerHTML += `<p> This is how to add html </p>`;
const title = "One Flew Over the Cuckoo's Nest"
// bookList.innerHTML += `<li>
//   <span class="name">${title}</span>
//   <span class="delete">delete</span>
//   </li>`

const banner = document.querySelector("#page-banner");
console.log(`---------------------------------------banner`);
console.log(banner);
console.log(`---------------------------------------banner.nodeType`);
console.log(banner.nodeType);
console.log(`---------------------------------------banner.nodeName`);
console.log(banner.nodeName);
console.log(`--------------------------------banner.hasChildNodes()`);
console.log(banner.hasChildNodes());
const clonedBanner = banner.cloneNode(true);
console.log(`------------------------------------------clonedBanner`);
console.log(clonedBanner);
console.log(`-----------------------------------bookList.parentNode`);
console.log(bookList.parentNode);
console.log(`--------------------------------bookList.parentElement`);
console.log(bookList.parentElement);
console.log(`------------------bookList.parentElement.parentElement`);
console.log(bookList.parentElement.parentElement);
console.log(`-------------------------------------bookList.children`);
console.log(bookList.children);
console.log(`----------------------------------bookList.nextSibling`);
console.log(bookList.nextSibling);
console.log(`---------------------------bookList.nextElementSibling`);
console.log(bookList.nextElementSibling);
console.log(`-----------------------bookList.previousElementSibling`);
console.log(bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += `
  <br> Too cool for everyone else`;
const h2 = document.querySelector("#book-list h2");
h2.addEventListener("click",  e => {
  console.log(`---------------------------------------------e.target`);
  console.log(e.target);
  console.log(`----------------------------------------------------e`);
  console.log(e);
});
const buttons = document.querySelectorAll("#book-list .delete");
Array.from(buttons).forEach( button => {
  button.addEventListener("click", e => {
    console.log(`--------------------------------ouch you clicked me`);
    console.log(button);
    console.log(button.parentElement);
    console.log(`-------------------------------------------e.target`);
    console.log(e.target);
    console.log(e.target.parentElement);
    const li = e.target.parentElement;
    console.log(`--------------------------------------li.parentNode`);
    console.log(li.parentNode);
    li.parentNode.removeChild(li);
    
  })
})

const link = document.querySelector("#page-banner a");
link.addEventListener("click", e => {
  e.preventDefault();
  console.log(`navigation to ${e.target.textContent} was prevented`);
})