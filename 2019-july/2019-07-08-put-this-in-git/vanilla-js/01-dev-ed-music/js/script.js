window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".audio");
    console.log(sounds);
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#f4d17a",
        "#f27c4e",
        "#ed4800",
        "#9e78a2",
        "#8cb9b5",
        "#759488"]
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    })
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index]
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    }

});