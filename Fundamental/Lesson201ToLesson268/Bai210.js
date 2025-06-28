//Viết chương trình JavaScript để lấy danh sách các phần tử trong cả hai mảng, sau khi áp dụng hàm được cung cấp cho từng phần tử mảng của cả hai.
const bai210 = (arr1, arr2, fn) => {
  let a = new Set(arr2.map((item) => fn(item)));
  return arr1.filter((item) => a.has(fn(item)));
};
console.log(bai210([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(bai210([2.1, 1.2, 5.3], [2.3, 3.4, 5], Math.floor));
