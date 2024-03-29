const correctAnswers = ["B", "B", "B", "B",];
const form = document.querySelector(".quiz-form");
const results = document.querySelector(".results");

form.addEventListener("submit", e => {
  e.preventDefault(); // the default action is to refresh page

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 25;
    }
  })

  scrollTo(0, 0);

  results.classList.remove("d-none");

  let output = 0;
  const timer = setInterval( () => {
    results.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++
    }
  }, 20);
});

