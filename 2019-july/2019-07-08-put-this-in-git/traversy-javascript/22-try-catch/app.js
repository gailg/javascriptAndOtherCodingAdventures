try {
  // ReferenceError
  // myFunction();
  // TypeError
  // null.myFunction();
  // console.log(eval("2+2"));
  // eval("Hello world");
  // URIError
  // decodeURIComponent("%");


} catch(e) {
  console.log(`------------------------------------------------------------e`);
  console.log(e);
  console.log(`----------------------------------------------------e.message`);
  console.log(e.message);
  console.log(`----------------------------------e instanceof ReferenceError`);
  console.log(e instanceof ReferenceError)

} finally {
  // console.log(`Finally runs reguardless of error`)
}

// console.log("program continues");

const user = {email: "jdoe@gmail.com"};

try {
  if(!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch(e) {
  console.log(`------------------------------------------------------------e`);
  console.log(e);
  console.log(`User Error: ${e.message}`);
}
