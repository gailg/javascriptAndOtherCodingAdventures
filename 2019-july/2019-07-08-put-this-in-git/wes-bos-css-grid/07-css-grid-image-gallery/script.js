const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector("close");

function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
        <img src="images/acrylic-pouring-${randomNumber(10)}.jpg">
        </div>
    `;
}
function randomNumber(upperLimit) {
    return Math.floor(Math.random() * upperLimit + 1);
}
const digits = Array.from({ length: 50}, () =>
    [randomNumber(4), randomNumber(4)]).concat([
         [2,1], [1,2], [2,1], [1,2], [2,1], [1,2], [2,1], [1,2], 
         [2,1], [1,2], [2,1], [1,2], [2,1], [1,2], [2,1], [1,2],
         [2,1], [1,2], [2,1], [1,2], [2,1], [1,2], [2,1], [1,2],
         [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]
    ])
const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;