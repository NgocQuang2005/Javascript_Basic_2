//Viết chương trình JavaScript để lấy tất cả các giá trị duy nhất của một mảng, dựa trên hàm so sánh được cung cấp.
function bai108(arr, fn) {
  return arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) {
      acc.push(v);
    }
    return acc;
  }, []);
}
console.log(
  bai108(
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
