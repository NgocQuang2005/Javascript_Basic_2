//Viết một chương trình JavaScript để curry (curries) một hàm.
function bai46(fn, arity = fn.length, ...args) {
  if (args.length >= arity) {
    return fn(...args);
  }
  return (...newArgs) => bai46(fn, arity, ...args, ...newArgs);
}
console.log(bai46(Math.pow)(2)(8));
console.log(bai46(Math.min, 3)(10)(50)(2));
