//Viết một chương trình JavaScript để lấy bất kỳ số lượng đối tượng lặp lại hoặc đối tượng có thuộc tính độ dài nào và trả về đối tượng dài nhất.
function bai79(...arg) {
  return arg.reduce(
    (init, value) => (value.length > init.length ? value : init),
    ""
  );
}
console.log(bai79("a", "ab", "abc", "abcd")); // "abcd"
console.log(bai79([1, 2], [1, 2, 3], [1, 2, 3, 4])); // [1, 2, 3, 4]
