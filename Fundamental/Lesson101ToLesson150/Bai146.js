//Viết chương trình JavaScript để tạo bản sao nông của một đối tượng.
function bai146(obj) {
  return Object.assign(obj);
}
const a = { x: true, y: 1 };
const b = bai146(a);
console.log(b);
