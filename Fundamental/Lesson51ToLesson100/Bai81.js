//Viết một chương trình JavaScript để tạo một đối tượng với các khóa được tạo ra bằng cách chạy hàm được cung cấp cho mỗi khóa. Đối tượng sẽ có cùng giá trị với đối tượng được cung cấp.
function bai81(obj, fn) {
  return Object.keys(obj).reduce((acc, val) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
}
console.log(bai81({ a: 1, b: 2 }, (val, key) => key + val));
