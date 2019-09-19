document.body.addEventListener("click", (e) => {

  if( e.target.parentElement.classList.contains("delete-item") ){
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }

})