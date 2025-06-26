//Viết chương trình JavaScript để tạo một mảng các cặp mảng khóa-giá trị từ một đối tượng nhất định.
function b40(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
console.log(b40({ a: 1, b: 2 }));
