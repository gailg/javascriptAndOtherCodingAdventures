

function playSound(e) {
    // console.log(`e.keyCode: ${e.keyCode}`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log("audio");
    // console.log(audio);
    // console.log(`key: ${key}`);
    if (!audio) return; //stops the function from playing
    audio.currentTime = 0; //rewinds to the start
    audio.play();
    // console.log(`key: ${key}`);
    key.classList.add("playing");
}


function removeTransition(e) {
    
    if(e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing");

}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound)

