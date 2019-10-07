class Typewriterg {
  constructor(textElement, words, wait) {
    this.textElement = textElement;
    this.words = words;
    this.text = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.IsDeleting = false;
  }
  type() {
    const currentWordIndex = this.wordIndex % this.words.length;
    const currentWord = this.words[currentWordIndex];
    if(this.isDeleting) {
      this.text = currentWord.substring(0, this.text.length - 1)
    } else {
      this.text = currentWord.substring(0, this.text.length + 1)
    }
    this.textElement.innerHTML = `<span class="text">${this.text}</span>`
    let typeSpeedForward = 300;
    let typeSpeed = (this.isDeleting ? typeSpeedForward/2 : typeSpeedForward);
  
    if(!this.isDeleting && this.text === currentWord) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.text === "") {
      typeSpeed = this.wait;
      this.isDeleting = false;
      this.wordIndex++;
    }
    setTimeout( () => this.type(), typeSpeed);
  }
}
// init on DOM load
document.addEventListener("DOMContentLoaded", init);

// init app
function init() {
  const textElement = document.querySelector(".text-type");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");
  // init typewriter
  new Typewriterg(textElement, words, wait);
}