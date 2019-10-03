function initMap(){
  const location = {
    lat: 38.5402,
    lng: -121.7457
  };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: location
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.8;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
})

$("#navbar a, .btn").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 68
      },
      800
    );
  }
});