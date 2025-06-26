/*
Viết chương trình JavaScript để nhóm các phần tử của một mảng nhất định dựa trên hàm cho sẵn.
Sử dụng Array.prototype.map() để ánh xạ các giá trị của mảng vào tên hàm hoặc thuộc tính.
Sử dụng Array.prototype.reduce() để tạo một đối tượng, trong đó các khóa được tạo ra từ các kết quả đã ánh xạ.
*/
function b52(arr, fn) {
  return arr
    .map(typeof fn === "function" ? fn : (item) => item[fn])
    .reduce((acc, curr, i) => {
      acc[curr] = acc[curr] ? acc[curr].concat(arr[i]) : [arr[i]];
      return acc;
    }, {});
}
console.log(b52(["one", "two", "three"], "length"));
console.log(b52([1, 2, 3, 4, 5, 6], (x) => x % 2));
