//Viết chương trình JavaScript để áp dụng một hàm cho một bộ tích lũy và mỗi khóa trong đối tượng (từ trái sang phải).
function bai118(obj, callbackFn, fn) {
  let accumulator = fn;
  for (const key of Object.keys(obj)) {
    accumulator = callbackFn(accumulator, obj[key], key);
  }
  return accumulator;
}
const obj = { a: 1, b: 2, c: 3 };
const result = bai118(
  obj,
  (acc, val, key) => {
    console.log(`Key: ${key}, Val: ${val}, Acc: ${acc}`);
    return acc + val;
  },
  0
);
console.log("Result:", result);
