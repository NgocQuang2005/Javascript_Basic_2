//Viết chương trình JavaScript để tìm tất cả các phần tử trong một mảng cho trước ngoại trừ phần tử đầu tiên. Trả về toàn bộ mảng nếu độ dài của nó là 1.
function b31(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return arr.slice(1);
}
console.log(b31([1, 2, 3, 4]));
