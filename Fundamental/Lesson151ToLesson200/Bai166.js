//Viết chương trình JavaScript để thực hiện phép kết hợp hàm từ trái sang phải cho các hàm bất đồng bộ.
function bai166(...fns) {
  return async function (input) {
    let result = input;
    for (let fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}
const f1 = async (x) => {
  console.log("f1:", x);
  return x + 1;
};
const f2 = async (x) => {
  console.log("f2:", x);
  return x * 2;
};
const f3 = async (x) => {
  console.log("f3:", x);
  return `Kết quả: ${x}`;
};
const run = bai166(f1, f2, f3);
run(5).then(console.log);
