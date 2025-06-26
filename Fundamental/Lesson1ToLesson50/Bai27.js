//Viết chương trình JavaScript để tìm mọi phần tử trong bất kỳ mảng nào trong hai mảng cho sẵn cùng một lúc, sử dụng hàm so sánh được cung cấp
function b27(arr1, arr2, fn) {
  const result = [...arr1];
  for (const item of arr2) {
    if (!result.some((el) => fn(el, item))) {
      result.push(item);
    }
  }
  return result;
}
console.log(
  b27(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
//output: [1,1.2,1.5,3,0,3.9]
