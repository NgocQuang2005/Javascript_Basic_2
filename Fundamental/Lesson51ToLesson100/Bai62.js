//Viết chương trình JavaScript để nối các hàm không đồng bộ.
function b62(fns) {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
}
b62([
  (next) => {
    console.log("1");
    setTimeout(next, 1000);
  },
  (next) => {
    console.log("2");
  },
]);
