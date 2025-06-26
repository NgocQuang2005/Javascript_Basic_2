//Viết chương trình JavaScript để chia giá trị thành hai nhóm theo hàm vị ngữ. Hàm này chỉ định nhóm mà một phần tử trong bộ sưu tập đầu vào thuộc về.
function b58(arr, fn) {
  return arr.reduce(
    function (acc, value) {
      if (fn(value)) {
        acc[0].push(value);
      } else {
        acc[1].push(value);
      }
      return acc;
    },
    [[], []]
  );
}
console.log(b58(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));
console.log(b58([1, 2, 3, 4, 5], (x) => x % 2 === 0));
