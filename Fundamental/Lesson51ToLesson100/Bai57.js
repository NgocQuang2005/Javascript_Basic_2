/**
    Viết chương trình JavaScript để tính giá trị trung bình của một mảng sau khi ánh xạ từng phần tử thành một giá trị bằng hàm được cung cấp.
 */
function bai57(arr, fn) {
  return (
    arr
      .map(typeof fn === "function" ? fn : (item) => item[fn])
      .reduce((acc, value) => acc + value, 0) / arr.length
  );
}
console.log(bai57([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a));
console.log(bai57([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], "a"));
