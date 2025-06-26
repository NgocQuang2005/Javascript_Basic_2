//Viết chương trình JavaScript để tạo một mảng n chiều với giá trị cho trước.
function bai212(val, ...args) {
  return args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => bai212(val, ...args.slice(1)));
}
console.log(bai212(1, 3));
console.log(bai212(5, 2, 2, 2));
