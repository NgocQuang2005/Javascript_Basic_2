//Viết chương trình JavaScript để áp dụng một hàm cho một bộ tích lũy và mỗi phần tử trong mảng (từ trái sang phải), trả về một mảng các giá trị giảm dần.
function bai156(arr, fn, acc) {
  return arr.reduce(
    (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),
    [acc]
  );
}
console.log(bai156([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
