/*
    Viết chương trình JavaScript để lấy một mảng tên thuộc tính hàm từ các thuộc tính có thể liệt kê riêng (và tùy chọn được kế thừa) của một đối tượng.
   
*/
function b48(obj, boolean = false) {
  if (typeof obj !== "object" || obj === null) {
    return [];
  }
  let keys = Object.keys(obj);
  if (boolean) {
    let proto = Object.getPrototypeOf(obj);
    if (proto) {
      let protoKeys = Object.keys(proto);
      keys = keys.concat(protoKeys);
    }
  }
  let result = [];
  for (let key of keys) {
    if (typeof obj[key] === "function") {
      result.push(key);
    }
  }
  return result;
}
console.log(b48({ a: 1, b: 2, c: function () {}, d: "test" }));
console.log(b48({ a: 1, b: 2, c: function () {}, d: "test" }, true));
