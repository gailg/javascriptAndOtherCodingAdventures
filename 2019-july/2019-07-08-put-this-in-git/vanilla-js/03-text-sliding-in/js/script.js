function scrollAppear(){
    let introContentText = document.querySelector(".intro-content-text");
    let introPosition = introContentText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(introPosition < screenPosition / 1.1) {
        introContentText.classList.add("intro-content-text-appear");
    }
    console.log(introPosition);
    console.log(`introPosition: ${introPosition}    screenPosition: ${screenPosition / 1.3}`);

}
window.addEventListener("scroll", scrollAppear);

