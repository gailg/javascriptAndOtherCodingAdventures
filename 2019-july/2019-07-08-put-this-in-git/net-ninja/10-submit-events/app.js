const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener("submit", e => {
  e.preventDefault();
  const username = form.username.value;
  const usernameIsGood = usernamePattern.test(username);
  feedback.textContent = (usernameIsGood 
    ? "yayeee... you have entered a valid username" 
    : "a username must contain 6-12 characters (upper or lower case letters)");
});

form.username.addEventListener("keyup", e => {
  // console.log(e.target.value, form.username.value);
  console.log(e);
  const username = e.target.value;
  const whichClass = usernamePattern.test(username) ? "success" : "error";
  form.username.setAttribute("class", whichClass);
});

// const username = "ltotter";
// const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);
// console.log(`------------------pattern.test(username)`);
// console.log(result);
// result = username.search(pattern);
// console.log(`----------------username.search(pattern)`);
// console.log(result);