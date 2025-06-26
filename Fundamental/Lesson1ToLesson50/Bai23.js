//Viết chương trình JavaScript để lọc ra các giá trị không duy nhất trong một mảng, dựa trên hàm so sánh được cung cấp.
function b23(arr, fn) {
  return arr.filter((a, b) => arr.every((c, d) => d == b || !fn(a, c)));
}
console.log(
  b23(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
