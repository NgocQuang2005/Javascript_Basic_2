//Viết chương trình JavaScript để khởi tạo một mảng hai chiều có kích thước và giá trị cho trước.
function b53(rows, cols, value) {
  const arr = Array.from({ length: rows }, () => Array(cols).fill(value));
  return arr;
}
console.log(b53(3, 4, 0));
