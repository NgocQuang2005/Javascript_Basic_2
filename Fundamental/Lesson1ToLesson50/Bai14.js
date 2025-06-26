//Viết chương trình JavaScript để thay thế tên của nhiều khóa đối tượng bằng các giá trị được cung cấp.
function b14(obj, keyMap) {
  let objNew = {};
  for (let key in obj) {
    let newKey = keyMap[key] || key;
    objNew[newKey] = obj[key];
  }

  return objNew;
}
const objUser = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

const keyMap = {
  fname: "firstName",
  lname: "lastName",
};
console.log(b14(objUser, keyMap));
