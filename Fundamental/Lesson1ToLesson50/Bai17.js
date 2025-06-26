//Viết một chương trình JavaScript để chia các giá trị của hai mảng cho trước thành hai nhóm. Nếu một phần tử trong bộ lọc là đúng, phần tử tương ứng trong bộ sưu tập thuộc về nhóm đầu tiên; nếu không, nó thuộc về nhóm thứ hai.
function b17(arr, arrBoolean) {
  return arr.reduce(
    (acc, val, index) => {
      arrBoolean[index] ? acc[0].push(val) : acc[1].push(val);
      return acc;
    },
    [[], []]
  );
}
console.log(b17([1, 2, 3, 4], [true, true, false, true]));
