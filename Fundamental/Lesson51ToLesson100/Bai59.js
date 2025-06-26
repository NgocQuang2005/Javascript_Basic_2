/*
    Viết chương trình JavaScript để tạo một hàm gọi fn trong một ngữ cảnh nhất định. Tùy chọn thêm bất kỳ biến bổ sung nào vào các đối số bắt đầu.
*/
function bai59(fn, context, ...args) {
  if (typeof fn !== "function") {
    throw new TypeError("First argument must be a function");
  }
  if (context === null || context === undefined) {
    context = globalThis;
  }
  return function (...additionalArgs) {
    return fn.apply(context, [...args, ...additionalArgs]);
  };
}
console.log(
  bai59(
    function (a, b) {
      return this.x + a + b;
    },
    { x: 10 },
    5
  )(15)
);
