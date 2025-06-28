//Viết một chương trình JavaScript lấy một hàm làm đối số, sau đó biến đối số đầu tiên thành đối số cuối cùng.
function bai232(fn) {
  return (first, ...rest) => fn(...rest, first);
}
function test(a, b, c) {
  return `a=${a}, b=${b}, c=${c}`;
}
const newFn = bai232(test);
console.log(newFn(1, 2, 3));
