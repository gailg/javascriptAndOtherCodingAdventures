// document.querySelector(".card-title").addEventListener("click", () => {
//   console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", () => {
//   console.log("card-content");
// })

// document.querySelector(".card").addEventListener("click", () => {
//   console.log("card");
// })

// document.querySelector(".col").addEventListener("click", () => {
//   console.log("col");
// })

// const deleteItem = document.querySelector(".delete-item");
// deleteItem.addEventListener("click", () => {
//   console.log("delete-item");
// })

document.body.addEventListener("click", (e) => {

  if( e.target.parentElement.classList.contains("delete-item") ){
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }

})