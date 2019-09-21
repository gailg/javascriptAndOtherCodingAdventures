/*

EasyHTTP library
Library for making HTTP requests

@version 2.0.0
@author Gail Gong
@license MIT

*/

class EasyHTTP {
  // make an http get request
  get(url) {
    return new Promise( (resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // make an http post request
  post(url, data) {
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // make an http put request

  put(url, data) {
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // make an http delete request

  delete(url) {
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => resolve("Resource deleted"))
      .catch(error => reject(error));
    });
  }



}