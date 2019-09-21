class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

const larry = new Person("Larry", "Otter");

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return "500 clams"
  }
}

const monty = new Customer("Monty", "Otter", "123-456-7890", "Big Otter");
console.log(monty.greeting());
console.log(monty);
console.log(Customer.getMembershipCost());