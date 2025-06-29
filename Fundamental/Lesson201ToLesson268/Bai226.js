//Viết chương trình JavaScript để lấy n phần tử ngẫu nhiên có khóa duy nhất từ ​​một mảng có kích thước bằng mảng đó.
function bai226(arr, n) {
  if (n > arr.length) {
    console.log("Số phần tử cần lấy lớn hơn độ dài mảng.");
  }
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, n);
}
const arr1 = ["a", "b", "c", "d", "e"];
console.log(bai226(arr1, 4));
