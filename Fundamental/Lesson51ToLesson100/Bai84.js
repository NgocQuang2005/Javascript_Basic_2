//Viết một chương trình JavaScript để tạo một đối tượng có cùng khóa với đối tượng được cung cấp. Nó cũng sẽ tạo ra các giá trị được tạo ra bằng cách chạy hàm được cung cấp cho mỗi giá trị.
function bai84(obj, fn) {
  return Object.keys(obj).reduce((acc, value) => {
    acc[value] = fn(obj[value], value, obj);
    return acc;
  }, {});
}
const users = {
  chong: { user: "quang", age: 19 },
  vo: { user: "mai", age: 18 },
};
console.log(bai84(users, (u) => u.age));
