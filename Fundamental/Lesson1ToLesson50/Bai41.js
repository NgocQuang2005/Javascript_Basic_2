//Viết chương trình JavaScript để tạo một đối tượng từ các cặp khóa-giá trị cho sẵn.
function b41(arr) {
  let result = {};
  for (let a of arr) {
    result[a[0]] = a[1];
  }
  return result;
}
console.log(
  b41([
    ["a", 1],
    ["b", 2],
  ])
);
console.log(
  b41([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
