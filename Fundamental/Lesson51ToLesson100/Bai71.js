//Viết chương trình JavaScript để tạo bản sao sâu của một đối tượng.
function bai71(obj) {
  if (typeof obj !== "object" || !Array.isArray(obj)) {
    return obj;
  }
  if (Array.isArray(value)) {
    let newArr = [];
    for (let item of value) {
      newArr.push(bai71(item));
    }
    return newArr;
  }
  let newObj = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      newObj[key] = bai71(value[key]);
    }
  }
  return newObj;
}
const original = {
  name: "Ngọc Quang",
  age: 19,
  address: { city: "Đà Nẵng", bx: 43 },
  hobbies: ["Soccer", "Volleyball"],
};

const copy = bai71(original);
copy.address.city = "Saigon";
copy.hobbies.push("travel");
console.log(original.address.city);
console.log(original.hobbies);
