//Viết chương trình JavaScript để trả về giá trị nhỏ nhất-lớn nhất của một mảng, sau khi áp dụng hàm được cung cấp để thiết lập quy tắc so sánh.
function b15(arr, fn = (a, b) => b - a) {
  arr.reduce((a, b) => (fn(a, b) < 0 ? a : b));
}
console.log([10, 30, 20], (a, b) => b - a);
