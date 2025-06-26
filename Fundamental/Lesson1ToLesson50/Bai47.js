//Viết chương trình JavaScript để thực hiện so sánh sâu giữa hai giá trị nhằm xác định xem chúng có tương đương hay không.
function b47(a, b) {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!keysB.includes(key) || !b47(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
console.log(b47(1, 1));
console.log(
  b47(
    { a: [2, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
);
