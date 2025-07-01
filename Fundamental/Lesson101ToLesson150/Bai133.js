//Viết chương trình JavaScript để lấy sự khác biệt đối xứng giữa hai mảng cho trước, sau khi áp dụng hàm được cung cấp cho từng phần tử mảng của cả hai.
function bai142(arr1, arr2, fn) {
  const newarr1 = arr1.map(fn);
  const newarr2 = arr2.map(fn);
  const result = [];
  arr1.forEach((el, i) => {
    if (!newarr2.includes(transformed1[i])) {
      result.push(el);
    }
  });
  arr2.forEach((el, i) => {
    if (!newarr1.includes(transformed2[i])) {
      result.push(el);
    }
  });
  return result;
}
