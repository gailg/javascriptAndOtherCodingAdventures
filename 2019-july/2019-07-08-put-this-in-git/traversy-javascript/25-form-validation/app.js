document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(){
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,12}$/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

}

function validateZip(){
  const name = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

}

function validateEmail(){
  const name = document.getElementById("email");
  const re = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

}

function validatePhone(){
  const name = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

}
