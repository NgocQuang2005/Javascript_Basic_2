//Viết chương trình JavaScript để thay đổi một hàm chấp nhận một mảng thành một hàm variadic.
function b43(fn) {
  return function (...args) {
    return fn(args);
  };
}
let Fn = b43(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));
Fn(p1, p2, p3).then(console.log);
