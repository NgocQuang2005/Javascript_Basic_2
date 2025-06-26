//Viết chương trình JavaScript để trả về đối tượng liên kết các thuộc tính với các giá trị của một mảng các mã định danh thuộc tính hợp lệ và một mảng các giá trị.
function bai101(keys, values) {
  return keys.reduce((acc, curr, indx) => {
    if (values[indx] !== undefined) {
      const key = curr;
      const val = values[indx];
      acc[key] = val;
    }
    return acc;
  }, {});
}
// Test the 'bai101' function
console.log(bai101(["a", "b", "c"], [1, 2])); // {"a":1,"b":2}
console.log(bai101(["a", "b"], [1, 2, 3])); // {"a":1,"b":2}
