//Viết chương trình JavaScript để tạo một hàm gọi hàm được cung cấp với các đối số được sắp xếp theo các chỉ mục đã chỉ định.
const bai158 =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map((i) => args[i]));

var rearged = bai158(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged("b", "c", "a"));
