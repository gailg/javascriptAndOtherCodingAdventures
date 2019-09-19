const clearButton = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");
// clearButton.addEventListener("click", runEvent);
// clearButton.addEventListener("dblclick", runEvent);
// clearButton.addEventListener("mousedown", runEvent);
// clearButton.addEventListener("mouseup", runEvent);
// card.addEventListener("mouseenter", runEvent);
// card.addEventListener("mouseleave", runEvent);
card.addEventListener("mousemove", runEvent);



function runEvent(event) {
  console.log(`event type: ${event.type}`);
  heading.textContent = `MouseX: ${event.offsetX}  MouseY: ${event.offsetY}`;
  document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;
}