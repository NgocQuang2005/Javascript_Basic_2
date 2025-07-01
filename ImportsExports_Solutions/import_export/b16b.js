import { sayHelloFromA } from "./b16a.js";

export function sayHelloFromB() {
  console.log("Xin chào từ B");
}
export function callA() {
  console.log("B gọi A:");
  sayHelloFromA();
}
