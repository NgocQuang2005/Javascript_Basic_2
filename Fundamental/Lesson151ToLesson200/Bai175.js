//Viết chương trình JavaScript để lấy chỉ mục của hàm trong mảng các hàm thực thi nhanh nhất.
function bai141(fns) {
  const times = fns.map((fn) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
  });
  let minTime = times[0];
  let minIndex = 0;
  for (let i = 1; i < times.length; i++) {
    if (times[i] < minTime) {
      minTime = times[i];
      minIndex = i;
    }
  }
  return minIndex;
}
const fns = [
  () => {
    for (let i = 0; i < 1000000; i++) {}
  },
  () => {
    for (let i = 0; i < 100; i++) {}
  },
  () => {
    for (let i = 0; i < 10000; i++) {}
  },
];
console.log(bai141(fns));
