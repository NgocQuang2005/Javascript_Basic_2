//Viết một chương trình JavaScript để lặp lại lệnh gọi lại n lần.
function bai127(callback, n) {
  if (typeof callback !== "function") {
    throw new Error("Tham số đầu tiên phải là hàm!");
  }
  if (typeof n !== "number" || n <= 0) {
    throw new Error("Số lần lặp phải là số dương!");
  }
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}
bai127((index) => {
  console.log(`Lần chạy thứ ${index + 1}`);
}, 5);
