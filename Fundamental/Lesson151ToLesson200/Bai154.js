//Viết một chương trình JavaScript để tạo một đối tượng bao gồm các thuộc tính mà hàm cho trả về false. Hàm được gọi với hai đối số: (giá trị và khóa).
function bai154(obj, fn) {
  let keys = Object.keys(obj)
    .filter((k) => !fn(obj[k]))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  return keys;
}

console.log(bai154({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));
