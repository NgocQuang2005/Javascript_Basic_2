//Viết một chương trình JavaScript để so sánh hai đối tượng để xác định xem đối tượng đầu tiên có chứa các giá trị thuộc tính tương đương với đối tượng thứ hai hay không. Điều này dựa trên một hàm được cung cấp.
function bai179(obj1, obj2, fn) {
  return Object.keys(obj2).every((key) => {
    return obj1.hasOwnProperty(key) && fn(obj1[key], obj2[key]);
  });
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2 };
console.log(bai179(obj1, obj2, (v1, v2) => v1 === v2));
