function User(username, email){
  this.username = username;
  this.email = email;
  this.score = 0;
  // this.login = function() {
  //   console.log(`${this.username} has just logged in`);
  // better to add functions using the prototype method
  // }
}

User.prototype.login = function() {
  console.log(`${this.username} has just logged in`);
  return this;
}
User.prototype.logout = function() {
  console.log(`${this.username} has just logged out`);
  return this;
}
User.prototype.increaseScore = function() {
  this.score ++;
  console.log(`${this.username} has a score of ${this.score}`);
  return this;
}
function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user) {
  users = users.filter( x => user.username != x.username );
}

const larry = new User("larry", "ltotter@ocena.org");
const monty = new User("monty", "monty@monterey.bay");
const charles = new Admin("charles", "cray@seaside.com", "black-belt-ninja");

console.log(larry);
larry.login().increaseScore().increaseScore().logout();
console.log(monty);
console.log(charles);

let users = [larry, monty, charles];
console.log(users);
charles.deleteUser(monty);
console.log(users);
