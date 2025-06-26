//Viết chương trình JavaScript để tạo một mảng các phần tử, tách nhóm các phần tử trong một mảng do zip tạo ra và áp dụng hàm được cung cấp.
function bai107(arr, fn) {
  let result = [];
  let maxLength = Math.max(...arr.map((sub) => sub.length));
  for (let i = 0; i < maxLength; i++) {
    let group = [];
    for (let j = 0; j < arr.length; j++) {
      group.push(arr[j][i]);
    }
    result.push(fn(...group));
  }
  return result;
}
console.log(
  bai107(
    [
      [1, 10, 100],
      [2, 20, 200],
    ],
    (...args) => args.reduce((acc, v) => acc + v, 0)
  )
);
