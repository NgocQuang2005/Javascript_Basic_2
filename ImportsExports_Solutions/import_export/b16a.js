import { sayHelloFromB } from "./b16b.js";
export function sayHelloFromA() {
  console.log("Xin chào từ A");
}
export function callB() {
  console.log("A gọi B:");
  sayHelloFromB();
}
