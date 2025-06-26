//Viết chương trình JavaScript để lấy giá trị nhỏ nhất của một mảng, sau khi ánh xạ mỗi phần tử thành một giá trị bằng hàm được cung cấp.
function bai177(arr, fn) {
  return Math.min(
    ...arr.map(typeof fn === "function" ? fn : (item) => item[fn])
  );
}
console.log(bai177([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(bai177([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"));
