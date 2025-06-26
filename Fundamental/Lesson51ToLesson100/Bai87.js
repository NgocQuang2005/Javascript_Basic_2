//Viết chương trình JavaScript để lấy n phần tử tối đa từ mảng được cung cấp. Nếu n lớn hơn hoặc bằng độ dài của mảng được cung cấp, hãy trả về mảng ban đầu (được sắp xếp theo thứ tự giảm dần).
function b87(arr, n = 1) {
  return arr.sort((a, b) => b - a).slice(0, n);
}
console.log(b87([1, 2, 3, 4, 5], 3));
console.log(b87([1, 2, 3, 4, 5], 10));
