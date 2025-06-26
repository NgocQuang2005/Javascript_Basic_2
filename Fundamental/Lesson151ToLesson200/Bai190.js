//Viết chương trình JavaScript để trả về giá trị boolean xác định xem giá trị được truyền có phải là giá trị nguyên thủy hay không.
function bai190(value) {
  return (
    value === null ||
    ["number", "string", "boolean", "undefined", "symbol", "bigint"].includes(
      typeof value
    )
  );
}
console.log(bai190(null));
console.log(bai190(50));
console.log(bai190("Hello!"));
console.log(bai190(false));
console.log(bai190(Symbol()));
console.log(bai190([]));
