class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  createSound() {
    console.log(`Âm thanh: ${this.sound}`);
  }
}
class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  makeSound() {
    super.createSound();
    console.log(`Màu sắc: ${this.color}`);
  }
}
console.log("=============================");
let cho = new Dog("Chó", "Gâu Gâu", "Đen");
cho.makeSound();
