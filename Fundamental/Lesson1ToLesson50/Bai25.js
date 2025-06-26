//Viết chương trình JavaScript để tạo một mảng từ các mảng bằng cách tạo ra từng cặp có thể có từ các mảng.
function b25(arr) {
  return arr.reduce((a, b) => {
    return a.flatMap((x) => b.map((y) => [x, y]));
  });
}
console.log(
  b25([
    [1, 2],
    [3, 4],
  ])
);
