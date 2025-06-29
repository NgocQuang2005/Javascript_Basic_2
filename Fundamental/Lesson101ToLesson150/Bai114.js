//Viết chương trình JavaScript để giải nén một hàm có độ sâu tới n.
function bai114(fn, level) {
  return (...args) => {
    let result = fn;
    for (let i = 0; i < level; i++) {
      if (typeof result === "function") {
        result = result(args[i]);
      } else {
        return null;
      }
    }
    return result;
  };
}
const krea = (a) => (b) => (c) => a + b + c;
let sum = bai114(krea, 3);
console.log(sum(2, 5, 8));
