//Viết chương trình JavaScript để tạo một mảng các phần tử, được nhóm lại dựa trên vị trí trong mảng gốc. Sử dụng hàm làm giá trị cuối cùng để chỉ định cách kết hợp các giá trị được nhóm lại.
function bai100(...arr) {
  const fn = typeof arr[arr.length - 1] === "function" ? arr.pop() : undefined;
  return Array.from(
    { length: Math.max(...arr.map((a) => a.length)) },
    (_, i) => {
      if (fn) return fn(...arr.map((a) => a[i]));
      return arr.map((a) => a[i]);
    }
  );
}
console.log(
  bai100(
    [1, 2, 3],
    [10, 20],
    [100, 200],
    (a, b, c) =>
      (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")
  )
);
