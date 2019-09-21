/*
EasyHTTP library
Library for making HTTP requests
@version 3.0.0
@author Gail Gong
@license MIT
*/

class EasyHTTP {
  // make an http get request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  // make an http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  // make an http put request (shift alt f)

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;

  }

  // make an http delete request

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const responseData = await "Resource deleted";
    return responseData;
  }
}