const user = {
  name: "Quang",
  address: "Đà Nẵng",
};
export default user;

// Xuất có tên (named export)
export const age = 20;
export const sayHello = () => {
  console.log("Xin chào từ user.js!");
};
export class student {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getStudent() {
    console.log(`Tên: ${this.name}`);
    console.log(`Tuổi: ${this.age}`);
    console.log(`Địa chỉ: ${this.address}`);
  }
}
