document.addEventListener("DOMContentLoaded", () => {
  
  // delete books
  
  const list = document.querySelector("#book-list ul");
  list.addEventListener("click", e => {
    if(e.target.className === "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  })
  
  // add books
  
  const addForm = document.forms["add-book"];
  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
  
    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteButton = document.createElement("span");
    
    // add classes
    bookName.classList.add("name");
    deleteButton.classList.add("delete");
  
    // add content
    bookName.textContent = value;
    deleteButton.textContent = "delete";
  
    // append to dom
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);
  })
  
  // hide books
  
  const hideBox = document.querySelector("#hide");
  hideBox.addEventListener("change", e => list.style.display = hideBox.checked ? "none" : "block");
  
  // search bar
  const searchBar = document.forms["search-books"].querySelector("input")
  searchBar.addEventListener("keyup", e => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(book => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) !== -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    })
  })
  
  // tabbed content
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", e => {
    if(e.target.tagName === "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach( panel => {
        if(panel === targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
  
  
    }
  })
});