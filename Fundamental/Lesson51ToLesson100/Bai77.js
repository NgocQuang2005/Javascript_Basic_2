//Viết chương trình JavaScript để lặp lại tất cả các thuộc tính của một đối tượng, chạy lệnh gọi lại cho từng thuộc tính.
function bai77(obj, fn) {
  return Object.keys(obj).forEach((key) => fn(obj[key], key, obj));
}
bai77({ name: "quang", age: 19 }, (v) => console.log(v));
