

// document.querySelector(".clear-tasks").addEventListener("click", onClick);
// function onClick() {
//   console.log("clicked");
// }

document.querySelector(".clear-tasks").addEventListener("click", 
(event) => {
  console.log(event.target.classList);
  event.target.innerText = "hello";
  console.log(event.type);
  console.log(event.timeStamp);
  console.log(event.clientY);
  console.log(event.offsetX);

  event.preventDefault();
});


