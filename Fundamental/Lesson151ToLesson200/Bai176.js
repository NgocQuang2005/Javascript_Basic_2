//Viết một chương trình JavaScript để lấy n phần tử tối thiểu từ mảng được cung cấp. Nếu n lớn hơn hoặc bằng độ dài của mảng được cung cấp, hãy trả về mảng ban đầu (được sắp xếp theo thứ tự tăng dần).
function bai175(arr, n = 0) {
  if (!Array.isArray(arr)) return "Bạn phải truyền vào 1 mảng";
  if (n >= arr.length) {
    return arr.sort((a, b) => {
      return a - b;
    });
  }
  if (n === 0) {
    return [arr[0]];
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(bai175([1, 2, 3]));
console.log(bai175([1, 2, 3], 2));
console.log(bai175([1, 8, 5], 4));
