document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);
// get local text file

function getText() {
  fetch("bible.txt")
  .then(function(response){
    // console.log(response.text());
    return(response.text());
  })
  .then(function(data){
    console.log(data);
    document.querySelector(".output").innerHTML = data;
  })
  .catch(function(error) {
    console.log(error);
  })
}

// get local json file

function getJson() {
  fetch("posts.json")
  .then(function(response){
    // console.log(response.text());
    return(response.json());
  })
  .then(function(data){
    console.log(data);
    let output = "";
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    })
    document.querySelector(".output").innerHTML = output;
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getExternal() {
  fetch("https://api.github.com/users")
  .then(function(response){
    // console.log(response.text());
    return(response.json());
  })
  .then(function(data){
    console.log(data);
    let output = "";
    data.forEach(function(user){
      output += `<li>${user.login}</li>`
    })
    document.querySelector(".output").innerHTML = output;
  })
  .catch(function(error) {
    console.log(error);
  })
}