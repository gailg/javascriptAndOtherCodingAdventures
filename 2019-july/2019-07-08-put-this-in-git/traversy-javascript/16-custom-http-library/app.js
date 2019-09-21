const http = new easyHTTP;

// get posts

// http.get("https://jsonplaceholder.typicode.com/posts",
//   function(error, posts) {
//     if(error) {
//       console.log(error);
//     } else {
//       console.log(posts);
//     }
    
//   }
// );

// get post

// http.get("https://jsonplaceholder.typicode.com/posts/1",
//   function(error, post) {
//     if(error) {
//       console.log(error);
//     } else {
//       console.log(post);
//     }
    
//   }
// );

// create data

const data = {
  title: "One morning in Monterey",
  body: "It was foggy and a baby otter was crying."
};

// create post

// http.post("https://jsonplaceholder.typicode.com/posts/", data, function(error, post) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })

//update post

http.put("https://jsonplaceholder.typicode.com/posts/42",
  data, function(error, post) {
    if(error) {
      console.log(error);
    } else {
      console.log(post);
    }
  })

http.delete("https://jsonplaceholder.typicode.com/posts/1",
  function(error, response) {
    if(error) {
      console.log(error);
    } else {
      console.log(response);
    }
    
  }
);
