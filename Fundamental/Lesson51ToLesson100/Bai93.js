function bai93Xoa() {
  const button = document.querySelector("button");
  button.removeEventListener("click", bai93Add);
}
function bai93Add() {
  const button = document.querySelector("button");
  button.addEventListener("click", bai93Add);
  console.log("Button clicked!");
}
