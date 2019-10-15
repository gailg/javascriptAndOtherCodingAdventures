const userOne = {
  username: "larry",
  email: "ltotter@ocean.org",
  login(){
    console.log("the user is logged in");
  },
  logout(){
    console.log("the user has logged out");
  }
};
console.log(`---------------------------------userOne.email`);
console.log(userOne.email);
console.log(`---------------------------------userOne.username`);
console.log(userOne.username);
console.log(`---------------------------------userOne.login()`);
userOne.login();

class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} has just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} has just logged out`);
    return this;
  }
  increaseScore() {
    this.score ++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}
class Admin extends User {
  constructor(username, email, title){
    super(username, email);
    this.title = title;

  }
  deleteUser(user){
    users = users.filter( x => user.username != x.username );
  }
}

const larry = new User("larry", "ltotter@ocena.org");
const monty = new User("monty", "monty@monterey.bay");
const charles = new Admin("charles", "cray@seaside.com", "black-belt-ninja");

console.log(larry);
larry.login().increaseScore().increaseScore().logout();
console.log(charles);

let users = [larry, monty, charles];
console.log(users);
charles.deleteUser(monty);
console.log(users);
