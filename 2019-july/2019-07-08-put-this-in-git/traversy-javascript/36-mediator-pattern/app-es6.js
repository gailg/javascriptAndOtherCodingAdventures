class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(`${from.name} to ${this.name}:   ${message}`)
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }
  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }
  send(message, from, to) {
    if (to) { // single user message
      to.receive(message, from);
    } else {  // mass message
      console.log(this.users);
      for (let key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

const larry = new User("Larry");
const monty = new User("Monty");
const charles = new User("Charles");
const sangea = new User("Sangea");
const chatroom = new Chatroom();
chatroom.register(larry);
chatroom.register(monty);
chatroom.register(charles);
chatroom.register(sangea);
larry.send("Hello Monty", monty);
sangea.send("I love you Larry", larry);
charles.send("Hello everyone");




















