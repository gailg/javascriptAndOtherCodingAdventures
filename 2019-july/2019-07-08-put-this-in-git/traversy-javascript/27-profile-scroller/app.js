const data = [
  {
    name: "Larry Otter",
    age: 31,
    gender: "male",
    lookingFor: "female",
    location: "Monterey, CA",
    image: "./images/larry.jpg"
  },
  {
    name: "Sangea Otter",
    age: 22,
    gender: "female",
    lookingFor: "male",
    location: "Monterey, CA",
    image: "./images/sangea.jpg"
  },
  {
    name: "Charles Otter",
    age: 26,
    gender: "male",
    lookingFor: "female",
    location: "Monterey, CA",
    image: "./images/charles.jpg"
  }
]

const profiles = profileIterator(data);
nextProfile();

// next event

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>`;
    document.getElementById("imageDisplay").innerHTML =
      `<img src=${currentProfile.image}>`;
  } else {
    window.location.reload()
  }
}



function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
          done: true
        };
    }
  }
}