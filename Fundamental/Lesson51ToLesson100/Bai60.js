//Viết một chương trình JavaScript để tạo một hàm gọi phương thức tại một khóa nhất định của một đối tượng. Tùy chọn, thêm bất kỳ tham số nào được cung cấp vào đầu các đối số.
function bai60(obj, key, ...args) {
  const keys = key.split(".");
  console.log(keys);
  const methodName = keys.pop();
  let targetObj = obj;
  for (let key of keys) {
    targetObj = targetObj[key];
    if (targetObj == null) {
      throw new Error(`key không tồn tại tại "${key}"`);
    }
  }
  const method = targetObj[methodName];
  if (typeof method !== "function") {
    throw new Error(`"${methodName}" không phải là function`);
  }
  return method.apply(targetObj, args);
}
const obj = {
  math: {
    sum(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    },
  },
};

console.log(bai60(obj, "math.sum", 10, 20));
console.log(bai60(obj, "math.multiply", 5, 6));
