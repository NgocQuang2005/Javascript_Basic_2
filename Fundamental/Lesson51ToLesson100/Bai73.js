//Viết chương trình JavaScript để trả về sự khác biệt giữa hai mảng, sau khi áp dụng hàm được cung cấp cho từng phần tử mảng của cả hai mảng.
function bai73(arr1, arr2, fn) {
  let rsArr1 = arr1.map(fn);
  let rsArr2 = arr2.map(fn);
  let result = [];
  rsArr1.forEach((item, index) => {
    if (!rsArr2.includes(item)) {
      result.push(arr1[index]);
    }
  });
  return result;
}
const arr1 = [1.2, 2.1];
const arr2 = [2.3, 3.4];
// console.log(bai73(arr1, arr2, Math.floor));
console.log(bai73(arr1, arr2, Math.floor));
console.log(bai73([{ x: 2 }, { x: 1 }], [{ x: 1 }], (v) => v.x));
