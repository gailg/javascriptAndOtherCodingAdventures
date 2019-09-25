const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);

  }, 
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}
const Chatroom = function () {
  let users = {};

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) { // single user message
        to.receive(message, from);
      } else {  // mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
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




















