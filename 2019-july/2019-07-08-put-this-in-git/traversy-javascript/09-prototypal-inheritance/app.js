function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.greeting = function() {
  return `Hey ${this.firstName} ${this.lastName}!`;
}
const john = new Person("John", "Doe");
console.log(john.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}
// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return Customer prototype
Customer.prototype.constructor = Customer;

const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");
console.log(customer1);


Customer.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}! Welcome to our space.`
}
console.log(customer1.greeting());
