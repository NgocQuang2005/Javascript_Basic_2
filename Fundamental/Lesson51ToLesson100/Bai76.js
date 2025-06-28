//Viết chương trình JavaScript để thực thi một hàm được cung cấp một lần cho mỗi phần tử mảng, bắt đầu từ phần tử cuối cùng của mảng.
function bai76(arr, fn) {
  return arr.reverse().forEach(fn);
}
bai76([1, 2, 3, 4], (val) => console.log(val));
