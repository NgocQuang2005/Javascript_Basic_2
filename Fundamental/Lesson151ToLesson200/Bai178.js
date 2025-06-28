//Viết chương trình JavaScript để tạo một đối tượng mới từ sự kết hợp của hai hoặc nhiều đối tượng.
function bai178(...objects) {
  const result = {};
  objects.forEach((obj) => {
    for (let key in obj) {
      if (result.hasOwnProperty(key)) {
        if (!Array.isArray(result[key])) {
          result[key] = [result[key]];
        }
        result[key].push(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  });
  return result;
}
const obj1 = { name: "Teddy", age: 2 };
const obj2 = { name: "Bear", color: "brown" };
const obj3 = { name: "Cute Bear", price: 100 };
const merged = bai178(obj1, obj2, obj3);
console.log(merged);
