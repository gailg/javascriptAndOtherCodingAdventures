const input = document.querySelector(".input");
input.addEventListener("keydown", event => {
  console.log(event.keyCode);
  document.querySelector(".answer").innerText = event.keyCode;
})