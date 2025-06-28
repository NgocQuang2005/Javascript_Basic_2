//Viết một chương trình JavaScript để lặp lại tất cả các thuộc tính của một đối tượng theo chiều ngược lại, chạy lệnh gọi lại cho từng thuộc tính.
function bai231(obj, fn) {
  return Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj[key]));
}
console.log(bai231({ foo: "bar", a: 1 }, (v) => console.log(v)));
