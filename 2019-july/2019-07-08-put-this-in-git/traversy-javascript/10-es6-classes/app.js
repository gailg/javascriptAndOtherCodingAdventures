class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hey ${this.firstName} ${this.lastName}`
  }
  age() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x, y) {
    return x + y;
  }
}
const mary = new Person("Mary", "Williams", "September 20 1985");

mary.getsMarried("Jones");
console.log(mary);
console.log(mary.greeting());