//Viết chương trình JavaScript để giảm một mảng nhất định thành giá trị băm (kho lưu trữ dữ liệu có khóa).
function bai124(obj, key) {
  if (typeof obj !== "object") return "truyền vào không phải là 1 object";
  let result = {};
  for (let i = 0; i < obj.length; i++) {
    let keys = Object.keys(obj[i]);
    if (!keys.includes(key)) return "key không có trong obj";
    result[obj[i][key]] = obj[i];
  }
  return result;
}
let employees = [
  {
    name: "Ngọc Quang",
    age: 19,
    address: "Đà Nẵng",
  },
  {
    name: "Ngọc Sáng",
    age: 7,
    address: "Nghệ An",
  },
  {
    name: "Đức Bảo",
    age: 17,
    address: "Nghệ An",
  },
];
console.log(bai124(employees, "age"));
