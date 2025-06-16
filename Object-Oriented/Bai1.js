class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  getPerson() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}
let user1 = new Person("Quang", 19, "Đà Nẵng");
let user2 = new Person("Mai", 18, "Đà Nẵng");
user1.getPerson();
user2.getPerson();
console.log("=============================");
