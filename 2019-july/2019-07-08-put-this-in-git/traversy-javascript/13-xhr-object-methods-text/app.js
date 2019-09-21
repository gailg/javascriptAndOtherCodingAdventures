document.getElementById("button").addEventListener("click", loadData);

function loadData(){
  console.log("loadData: hello");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  console.log("loadData: READYSTATE", xhr.readyState);

  // The old way
  // xhr.onreadystatechange = function() {
  //   console.log("onreadystatechange: READYSTATE", xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onprogress = function() {
    console.log("onprogress: READYSTATE", xhr.readyState);
  }
  xhr.onload = function(){
    console.log("onload: READYSTATE", xhr.readyState);
    if(this.status === 200) {
      console.log(this.responseText);
      document.getElementById("output").innerHTML = 
      `<p>${this.responseText}</p>`
    }
  }

  xhr.onerror = function() {
    console.log("Request error")
  }

  xhr.send();
}

  // http statuses
  // 200: ok
  // 403: forbidden
  // 404: not found

  // readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready