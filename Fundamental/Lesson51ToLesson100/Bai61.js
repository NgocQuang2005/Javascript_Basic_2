//Viết chương trình JavaScript để chuyển đổi giá trị được cung cấp thành một mảng nếu nó không phải là một mảng.
function b61(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value];
  }
}
console.log(b61(5));
