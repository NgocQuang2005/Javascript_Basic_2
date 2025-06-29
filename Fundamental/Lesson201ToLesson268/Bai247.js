//Viết chương trình JavaScript gán giá trị mặc định cho tất cả các thuộc tính chưa xác định trong một đối tượng.
function bai247(obj, defaultValue = "Thêm vào dùm") {
  return Object.keys(obj).reduce((acc, key) => {
    obj[key] === undefined ? (acc[key] = defaultValue) : (acc[key] = obj[key]);
    return acc;
  }, {});
}
const user = {
  name: undefined,
  age: 19,
  address: "Đà Nẵng",
  role: undefined,
};
console.log(bai247(user, "heheeh"));
