//Viết chương trình JavaScript để nối tất cả các phần tử của một mảng thành một chuỗi và trả về chuỗi này. Sử dụng dấu phân cách và dấu phân cách kết thúc.
function bai182(arr, sep = ",", end = ",") {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  let allButLast = arr.slice(0, -1).join(sep);
  let last = arr[arr.length - 1];
  return allButLast + end + last;
}
console.log(bai182(["pen", "pineapple", "apple", "pen"], ",", "&"));
console.log(bai182(["pen", "pineapple", "apple", "pen"], ","));
console.log(bai182(["pen", "pineapple", "apple", "pen"]));
