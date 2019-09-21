function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}
UI.prototype.addBookToList = function(book){
  console.log(book);
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  const innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  row.innerHTML = innerHTML;
  list.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);
  setTimeout( () => {
    document.querySelector(".alert").remove();
  }, 3000);
}

UI.prototype.deleteBook = function(target){
  if(target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// event listener for add
document.getElementById("book-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);
  const ui = new UI();
  if(title === "" || author === "" || isbn === "") {
    ui.showAlert("something is missing", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert(`${title}, by ${author} successfully added!`, "success");
    ui.clearFields();
  }
  e.preventDefault();
})

// event listener for delete
document.getElementById("book-list").addEventListener("click", (e) => {
  const ui = new UI();
  const larry = e.target;
  //  Look at larry.parentElement.parentElement.textContent or
  //  Array.from(larry.parentElement.parentElement.textContent)
  //  to get details about the book so I can report which book
  //  is being deleted.
  ui.deleteBook(e.target);
  ui.showAlert("book removed", "success");
  e.preventDefault();
})


// larry.parentElement.parentElement.textContent
// "
// The Grapes of Wrath
// John Steinbeck
// 1234
// X
// "
// Array.from(larry.parentElement.parentElement.textContent)
// ["↵", " ", " ", " ", " ", "T", "h", "e", " ", "G", "r", "a", "p", "e", "s", " ", "o", "f", " ", "W", "r", "a", "t", "h", "↵", " ", " ", " ", " ", "J", "o", "h", "n", " ", "S", "t", "e", "i", "n", "b", "e", "c", "k", "↵", " ", " ", " ", " ", "1", "2", "3", "4", "↵", " ", " ", " ", " ", "X", "↵", " ", " "]